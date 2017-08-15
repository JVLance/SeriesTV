<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo!!');
 
Class Series extends CI_CONTROLLER
{
     public function __construct()
     {
         parent::__construct();
         
         $this->load->database('default');
         $this->load->helper(array('url','form'));
         //cargamos la librería form_validation
         $this->load->library(array('form_validation'));
         //cargamos el modelo serie_model
         $this->load->model('serie_model');
     
     }
     
     //través del array data a la misma
     public function index()
     {
         $data = array('titulo' => 'Mantenedor de Series',
           'series' => $this->serie_model->get_series());
         $this->load->view('series',$data);
     }
 
 
 //función para eliminar series de tv
    public function delete_serie()
    {
        //comprobamos si es una petición ajax y existe la variable post id
        if($this->input->is_ajax_request() && $this->input->post('id'))
        {
        	$id = $this->input->post('id');
 
            $this->serie_model->delete_serie($id);
 
        }
 
    }
 
    public function multi_serie()
    {
 
    	if($this->input->is_ajax_request())
        {
 
            $this->form_validation->set_rules('nombre', 'nombre', 'trim|min_length[2]|required|max_length[80]');
            $this->form_validation->set_rules('autor', 'autor', 'trim|min_length[2]|required|max_length[60]');
            $this->form_validation->set_rules('director', 'director', 'trim|min_length[2]|required|max_length[60]');
            $this->form_validation->set_rules('anio', 'anio', 'trim|required');

            $this->form_validation->set_message('required','El %s es obligatorio');
            $this->form_validation->set_message('max_length', 'El %s no puede tener más de %s carácteres');
            $this->form_validation->set_message('min_length', 'El %s no puede tener menos de %s carácteres');
 
            if($this->form_validation->run() == FALSE)
            {

            	$errors = array(
     'nombre' => form_error('nombre'),
     'autor' => form_error('autor'),
     'director' => form_error('director'),
     'anio' => form_error('anio'),
     'respuesta' => 'error',
     'encontrado' => false
 );
 echo json_encode($errors);
 
 return FALSE;
 
            }else{
 
            	$nombre = $this->input->post('nombre');
         	    $autor = $this->input->post('autor');
                $director = $this->input->post('director');
                $anio = $this->input->post('anio');
            	if($this->input->post('id'))
            	{
 
                     $id = $this->input->post('id');
                     $this->serie_model->edit_serie($id,$nombre,$autor, $director, $anio);
                        
                        $response = array(
                         'respuesta' => 'ok'
                     );
                                    
                    echo json_encode($response);
            	}else{
                    if ($this->serie_model->find_serie($nombre)){
                        $this->serie_model->new_serie($nombre,$autor, $director, $anio);
                    
                        $response = array(
                             'respuesta' => 'ok'
                         );
                                        
                         echo json_encode($response);
                	}else{
                        $errors = array(
                             'encontrado' => true,
                             'nombre' => $nombre,
                             'respuesta' => 'error'
                         );
                         echo json_encode($errors);
                    }
                }
 
            }
 
        }
        
    }
 
}