# Merge Sort Project
## Questions
[16,21,11,8,12,22] -> Merge Sort

    Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
    
    Big-O gösterimini yazınız.
    
## Answers
### 1-
<p align="center">
[16,21,11,8,12,22] </br>
[16,21,11] &nbsp; | &nbsp; [8,12,22] </br>
[16] &nbsp; | &nbsp; [21,11] &nbsp; | &nbsp; [8,12] &nbsp; | &nbsp; [22] </br>
[16] &nbsp; | &nbsp; [21] &nbsp; | &nbsp; [11] &nbsp; | &nbsp; [8] &nbsp; | &nbsp; [12] &nbsp; | &nbsp; [22] </br>
[16] &nbsp; | &nbsp; [11,21] &nbsp; | &nbsp; [8,12] &nbsp; | &nbsp; [22] </br>
[11,16,21] &nbsp; | &nbsp; [8,12,22] </br>
[8,11,12,16,21,22] 
</p>

### 2-  
####O(nlogn)