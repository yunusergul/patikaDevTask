/*
test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
*/

create table employee (
    id serial,
    name VARCHAR(50), 
    birthday DATE, 
    email VARCHAR(100)

);

insert into employee (name, birthday, email) values 
('Chlo Cloke', '10/1/1958', 'ccloke0@census.gov')
, ('Rahal Wharf', '11/18/1992', 'rwharf1@weibo.com')
, ('Rosaline Scourfield', '2/26/1997', 'rscourfield2@fema.gov')
, ('Clive MacDowal', '2/15/1962', 'cmacdowal3@unesco.org')
, ('Buckie McGlade', '11/24/1964', 'bmcglade4@mit.edu')
, ('Ange Deniso', '3/24/1976', 'adeniso5@psu.edu')
, ('Jeremy Birtwhistle', '1/13/1993', 'jbirtwhistle6@google.ru')
, ('Lilllie Baseggio', '4/16/2000', 'lbaseggio7@dion.ne.jp')
, ('Arlena Garn', '6/2/1974', 'agarn8@amazon.com')
, ('Marwin O''Mullally', '4/2/1972', 'momullally9@linkedin.com')
, ('Beatriz Finby', '7/6/1960', 'bfinbya@myspace.com')
, ('Leonelle Pickover', '11/9/1950', 'lpickoverb@ocn.ne.jp')
, ('Orton Cartan', '5/3/1957', 'ocartanc@nationalgeographic.com')
, ('Nikola Gates', '1/29/1982', 'ngatesd@un.org')
, ('Binni Valencia', '8/11/1962', 'bvalenciae@loc.gov')
, ('Arny Shallcrass', '8/11/1950', 'ashallcrassf@fema.gov')
, ('Jerrie Lezemore', '10/8/1952', 'jlezemoreg@t.co')
, ('Cathie Joysey', '12/3/1980', 'cjoyseyh@mit.edu')
, ('Grady Osbiston', '9/5/1991', 'gosbistoni@artisteer.com')
, ('Timmie Cleyne', '3/29/1996', 'tcleynej@sakura.ne.jp')
, ('Abel Souter', '6/30/1975', 'asouterk@squidoo.com')
, ('Roanna MacCahee', '7/6/1967', 'rmaccaheel@ft.com')
, ('Gavan Adds', '10/17/1961', 'gaddsm@omniture.com')
, ('Cull Hoggins', '5/24/1994', 'chogginsn@mapy.cz')
, ('Pooh Boswell', '12/10/1956', 'pboswello@dropbox.com')
, ('Milzie Hentzeler', '3/26/1974', 'mhentzelerp@google.fr')
, ('Emory Cockaday', '3/2/1973', 'ecockadayq@goo.gl')
, ('Joellyn Shawcross', '8/4/1999', 'jshawcrossr@tuttocitta.it')
, ('Marcy Fouracres', '5/21/1953', 'mfouracress@paginegialle.it')
, ('Audy Featherstone', '6/17/1982', 'afeatherstonet@illinois.edu')
, ('Shannon Yitzovicz', '4/27/1963', 'syitzoviczu@patch.com')
, ('Jarred Bridgewood', '11/11/1977', 'jbridgewoodv@webs.com')
, ('Trey Benstead', '11/2/1984', 'tbensteadw@skyrock.com')
, ('Gnni Yuill', '5/5/1981', 'gyuillx@pbs.org')
, ('Edythe Ingleson', '9/5/1970', 'einglesony@usda.gov')
, ('Frannie Guinnane', '11/11/1984', 'fguinnanez@pinterest.com')
, ('Teddy Maldin', '2/24/1971', 'tmaldin10@simplemachines.org')
, ('Kyle Colbertson', '7/18/1984', 'kcolbertson11@va.gov')
, ('Perice Glanz', '11/30/1995', 'pglanz12@npr.org')
, ('Layton Durdle', '4/26/1996', 'ldurdle13@reverbnation.com')
, ('Rica Binton', '3/8/1989', 'rbinton14@ask.com')
, ('Simonette Yitzovicz', '10/27/1982', 'syitzovicz15@paypal.com')
, ('Umberto Hathwood', '4/28/1979', 'uhathwood16@cocolog-nifty.com')
, ('Barnebas Dearden', '12/27/1967', 'bdearden17@un.org')
, ('Collie Dawby', '1/20/1978', 'cdawby18@irs.gov')
, ('Emmaline Gleadhell', '11/16/1993', 'egleadhell19@nydailynews.com')
, ('Bear Pizey', '9/7/1968', 'bpizey1a@disqus.com')
, ('Daryl Ghidoni', '7/27/1960', 'dghidoni1b@jimdo.com')
, ('Cody Jenne', '1/5/1973', 'cjenne1c@vk.com')
, ('Sibylle Sugarman', '11/8/1990', 'ssugarman1d@nifty.com');

UPDATE employee set name='deneme' where name='Timmie Cleyne';
UPDATE employee set name='Deneme2' where email='jlezemoreg@t.co';
UPDATE employee set email='jbridgewoodv@deneme.com' where email='jbridgewoodv@webs.com';
UPDATE employee set email='mhentzelerp@yandex.fr' where name='Milzie Hentzeler';
UPDATE employee set name='Chlo Deneme' where name='Chlo Cloke';

delete from employee where  name = 'Collie Dawby';
delete from employee where  name = 'Gavan Adds';
delete from employee where  email = 'ocartanc@nationalgeographic.com';
delete from employee where  email = 'ecockadayq@goo.gl';
delete from employee where  email = 'gyuillx@pbs.org';