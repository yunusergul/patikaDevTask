/*
film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
*/ 
select * from film where  length > (select floor(avg(length)) from film)
SELECT count(*) as max_rental_rate_const  from film where rental_rate =(SELECT rental_rate from film order by rental_rate DESC limit 1)
select title  from film where   rental_rate = (select max(rental_rate) from film ) and replacement_cost = (select min(replacement_cost)from film)
select * from customer where customer_id = any (select customer_id from payment group by customer_id  order by count(customer_id) DESC limit 10)