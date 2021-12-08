/*
city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
*/

select city, country from city  inner join country on country.country_id=city.country_id

select (first_name || ' ' || last_name ) as name , amount, payment_date from payment inner join customer on customer.customer_id=payment.customer_id 

SELECT (first_name || ' ' || last_name ) as name ,rental_date,return_date from rental inner join customer on customer.customer_id=rental.customer_id 