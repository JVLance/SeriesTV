<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo!!');
 
Class Serie_model extends CI_MODEL
{
	 public function __construct()
	 {
	 
	 	parent::__construct();
	 
	 }
	 
	 //obtengo las series
	 public function get_series()
	 {
	 
		 $query = $this->db->get('series');
		 if($query->num_rows() > 0)
		 {
		 
		 return $query->result();
		 
		 }
	 
	 }

	 public function find_serie($nombre)
	 {
	 	$this->db->where('nombre',$nombre);
	 	$query = $this->db->get('series');
		 if($query->num_rows() > 0)
		 {
		 	return false;
		 }else{
		 	return true;
		 }
	 }
	 
	 //elimino las series
	 public function delete_serie($id)
	 {
		 $this->db->where('id',$id);
		 return $this->db->delete('series');
	 
	 }
	 
	 //editó las series
	 public function edit_serie($id,$nombre,$autor, $director, $anio)
	 {
	 
		 $data = array(
		 'nombre' => $nombre,
		 'autor' => $autor,
		 'director' => $director,
		 'anio' => $anio
		 );
		 
		 $this->db->where('id',$id);
		 $this->db->update('series',$data);
	 
	 }
	 
	 //añado series
	 public function new_serie($nombre,$autor, $director, $anio)
	 {
	 
		 
		$data = array(
		 'nombre' => $nombre,
		 'autor' => $autor,
		 'director' => $director,
		 'anio' => $anio
		 );
		 
		 $this->db->insert('series',$data);
	 
	 }
 
}