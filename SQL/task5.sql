/*
film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.
*/

select * from film where title like '%n' order by length desc limit 5;

select * from film where title like '%n'  order by length asc limit 10 offset 5 ;

SELECT * from customer where store_id = 1 order by last_name desc limit 4
