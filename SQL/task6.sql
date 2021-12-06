 /*
film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?
*/

SELECT round( AVG(rental_rate),3) as rental_rate_avg  from film;
SELECT count(*) as c_title  from film where title like 'C%';
select  length from film WHERE rental_rate = 0.99 ORDER by length DESC limit 1;
SELECT count( DISTINCT replacement_cost)  from film where length>150 ;