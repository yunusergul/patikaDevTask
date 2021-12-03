/* 
country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.
*/
SELECT * FROM country where country ~~ ('A%a'); -- (like) = (~~)
SELECT * FROM country where country ~~ ('_____%n');
SELECT * FROM film where title ~~* ('%T%') or title ~~ ('%T%T%T%T%'); -- (ilike) = (~~*)
SELECT * from  film where title ~~ ('C%') and length > 90 and rental_rate  in(2.99)