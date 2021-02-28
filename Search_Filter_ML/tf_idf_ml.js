var path = require('path');
var fs = require('fs');
var currentPath = path.dirname(path.dirname(__filename))
var filepath = path.join(currentPath,'public/static-files/data.json')
var json = require(filepath);



class YouTube_Search {
    // classDoc

    constructor(){
        // initializing constructor
        this.weighted = false;
        this.titles = [];
        this.corpus_dict = {};
    }

    addTitles(doc_name, list_of_words) {
        // building a dictionary
        var doc_dict = {}
        
        var key = Object.keys(this.corpus_dict)
        for(var w in list_of_words){
            doc_dict[list_of_words[w]] = 0;
            if(!key.includes(list_of_words[w])){
                this.corpus_dict[list_of_words[w]] = 0;
            }
        }
        for(var w in list_of_words){
            if(doc_dict[list_of_words[w]] !== undefined){
                doc_dict[list_of_words[w]] = doc_dict[list_of_words[w]]+1;
            }
            if(this.corpus_dict[list_of_words[w]] !== undefined){
                this.corpus_dict[list_of_words[w]] = this.corpus_dict[list_of_words[w]]+1;
            }
        }
        // normalizing the dictionary
        var length = parseFloat(list_of_words.length)
        for(var k in doc_dict){
            doc_dict[k] = doc_dict[k]/length
        }

        // add the normalized titles to the corpus
        this.titles.push([doc_name , doc_dict])
    }

    similarities(list_of_words){
    // Returns a list of all the [docname, similarity_score] pairs relative to a list of words.
    
    // building the query dictionary
        var query_dict = {};
        for(var w in list_of_words){
            query_dict[list_of_words[w]] = 0;
        }

        // normalizing the query
        for(var w in list_of_words){
            if(query_dict[list_of_words[w]] !== undefined){
                query_dict[list_of_words[w]] = query_dict[list_of_words[w]]+1;
            }
        }

        var length = parseFloat(list_of_words.length)
        for(var k in query_dict){
            query_dict[k] = query_dict[k]/length
        }

        // computing the list of similarities
        var sims = []
        for(var doc in this.titles){
            var score = 0.0
            var doc_dict = this.titles[doc][1]
            var key = Object.keys(doc_dict)
            for(var k in query_dict){
                if(key.includes(k)){
                    score += (query_dict[k] / this.corpus_dict[k]) + (doc_dict[k] / this.corpus_dict[k])
                }
            }
            sims.push([this.titles[doc][0], score])
        }
        return sims
    }
}

// object created
let search = new YouTube_Search();

// store id and title list
search_all_list = []
for(var data in json){
    store = json[data]
    var id = store.id
    var title = store.videoTitle
    title = title.split(" ")
    search_all_list.push([id, title])
}

// adding title to algorithms
for(data in search_all_list){
    search.addTitles(search_all_list[data][0], search_all_list[data][1])
}

//  sample to pass id and the array of search words
search.addTitles("foo", ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel"])
search.addTitles("bar", ["alpha", "bravo", "charlie", "bravo", "juliet", "kilo"])
search.addTitles("baz", ["kilo", "lima", "mike", "november"])
scores = search.similarities(["bravo ", "bravo", "november"])
score = scores.sort(function(a,b){
    return b[1] - a[1];
});
console.log(score)  

                                                                                                                