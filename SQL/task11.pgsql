/*
actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
İlk 3 sorguyu tekrar eden veriler için de yapalım.
*/

(SELECT first_name from actor) UNION (SELECT first_name from customer);
(SELECT first_name from actor) INTERSECT (SELECT first_name from customer);
(SELECT first_name from actor) EXCEPT (SELECT first_name from customer);

(SELECT first_name from actor) UNION all (SELECT first_name from customer);
(SELECT first_name from actor) INTERSECT all (SELECT first_name from customer); -- kesişim olduğundan bir fark olmadı
(SELECT first_name from actor) EXCEPT all (SELECT first_name from customer);