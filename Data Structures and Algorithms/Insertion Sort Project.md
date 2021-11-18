# Insertion Sort Project
## Questions
[22,27,16,2,18,6] -> Insertion Sort

    1-Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
    
    2-Big-O gösterimini yazınız.
    
    3-Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
    
    4-Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
## Answers
### 1-
```sh
[22,27,16,2,18,6] // => Array
[2,22,27,16,18,6] // stage 1
[2,6,22,27,16,18] // stage 2
[2,6,16,22,27,18] // stage 3
[2,6,16,18,22,27] // stage 4
```
### 2-  
$$O(n^2)$$

### 3-
#### Average case= O(n^2)

#### Worst case= O(n^2)

#### Best case= O(n)

### 4- Worst case

### Other 
```sh
[2,7,3,5,8,9,4,15,6]
[2,3,7,5,8,9,4,15,6]
[2,3,4,7,5,8,9,15,6]
[2,3,4,5,7,8,9,15,6]
```