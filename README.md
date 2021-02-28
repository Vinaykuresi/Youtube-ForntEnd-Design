## YouTube adding dynamic functionality Assignment.


#### *** Technologies Used : *** 

```
    1. HTML
    2. CSS
    3. JavaScript
```


#### *** FrontPage Design. ***
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/cb70e84758a42866d70d0fb65f4234e8210f6826/Assignments/Assignment_3/images/front.PNG)


#### *** Onclick of Video in the Suggestion list, Rendering the Video *** 
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/05bb3b077e8a7ebd3d0ff907db1d1ac1486469fe/Assignments/Assignment_3/images/front_change.PNG)


#### *** comment changed. *** 
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/05bb3b077e8a7ebd3d0ff907db1d1ac1486469fe/Assignments/Assignment_3/images/coments.PNG)


#### *** Search filter the Videos. The filter providing the Suggestions.*** 
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/05bb3b077e8a7ebd3d0ff907db1d1ac1486469fe/Assignments/Assignment_3/images/single_letter.PNG)


#### *** Suggestion list display based on Accuracy *** 
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/05bb3b077e8a7ebd3d0ff907db1d1ac1486469fe/Assignments/Assignment_3/images/double_letter.PNG)


#### *** Final filter based on Accuracy *** 
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/05bb3b077e8a7ebd3d0ff907db1d1ac1486469fe/Assignments/Assignment_3/images/three_letter.PNG)


#### *** Final result display, based in search. *** 
![picture](https://bitbucket.org/VinayKuresi/vinay_kuresi_march_batch_1/raw/05bb3b077e8a7ebd3d0ff907db1d1ac1486469fe/Assignments/Assignment_3/images/final_result.PNG)


#### *** Add on Sample Machine learning Algorithm written in JavaScript to search the list of Video, and filter Videos based on highest accuracy, providing the Threshold value. The result in a Array containing the accuracy in descending order. *** 


##### *** Sample code computing Scores. ***
```
 computing the list of similarities
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

```
##### *** Sample Output. ***
![Alt text](images/search_filter.PNG)