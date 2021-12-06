/*
film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
3. customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir? 
4. city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.
*/

select length,rental_rate, count(*) from film where length>180 group by length, rental_rate order by length ;
SELECT rating , count(rating) from film group by rating;
select replacement_cost , count(replacement_cost)  from film group by replacement_cost having count(replacement_cost) > 50;
SELECT store_id , count (store_id) from customer group by store_id;
select country_id, count(country_id) from city group by country_id order by count DESC LIMIT 1