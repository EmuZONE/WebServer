<?php
 include 'config.php';
 
/* Таблица MySQL, в которой хранятся данные */
 $table = "tsppbd";
 
/* Составляем запрос для извлечения данных из полей "name", "email", "theme",
"message", "data" таблицы "test_table" */
 $sql = "SELECT * FROM $table";
 
//  Выполняем запрос. Если произойдет ошибка - вывести ее. 
 $res = mysql_query($sql) or die(mysql_error());
 
// /* Выводим данные из таблицы */
 echo ("<table>
  <thead>
   <th>№</th>
   <th>ПІБ</th>
   <th>E-mail</th>
   <th>Стать</th>
   <th>Дата народження</th>
   <th>Область</th>
   <th>Місто</th>
   <th>Телефон</th>
  </thead> <tbody>");

 /* Цикл вывода данных из базы конкретных полей */
 while ($row = mysql_fetch_array($res)) {
     echo "<tr>\n";
     echo "<td>".$row['id']."</td>\n";
     echo "<td>".$row['userdata']."</td>\n";
     echo "<td>".$row['email']."</td>\n";
     echo "<td>".$row['gender']."</td>\n";
     echo "<td>".$row['birthdate']."</td>\n";
     echo "<td>".$row['region']."</td>\n";
     echo "<td>".$row['city']."</td>\n";
     echo "<td>".$row['phone']."</td>\n</tr>\n";
     
 }
 
 echo ("</tbody></table>\n");
 
// /* Закрываем соединение */
 mysql_close();
 
?>