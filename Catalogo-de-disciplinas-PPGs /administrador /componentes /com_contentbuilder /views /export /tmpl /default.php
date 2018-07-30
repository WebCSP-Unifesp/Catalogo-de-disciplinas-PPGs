<?php
/**
 * @package     ContentBuilder
 * @author      Markus Bopp
 * @link        http://www.crosstec.de
 * @license     GNU/GPL
 */
defined( '_JEXEC' ) or die( 'Restricted access' );


require_once(JPATH_COMPONENT_ADMINISTRATOR . DS . 'classes' . DS . 'contentbuilder_helpers.php');


header("content-type:application/csv;charset=utf-8");
header("Content-Disposition: attachment; filename=relatorio_disciplinas.csv");
header("Pragma: no-cache");



    foreach($this->data->visible_labels As $label){
            $label = str_replace(';', ',' , $label);
            echo trim(utf8_decode($label)).';';       
    }
    echo PHP_EOL;   

   
    foreach($this->data->items As $item){        
        foreach($item As $key => $value){
            if($key != 'colRecord' && in_array(str_replace('col','',$key), $this->data->visible_cols)){             
                  $value = str_replace(';', ',' , $value);
                  $value = str_replace("\n", "," , $value);
                  $value = str_replace("\r", "" , $value);
                  $value = str_replace("/var/www/clients/client0/web279/web", "http://rebrasni.sites.unifesp.br" , $value);



                 
                  echo trim(utf8_decode($value)).';';         
            }            
        }
       echo PHP_EOL;
       }

       
    
exit;
?>
