@extends('plantilla')

@section('titulo', 'Buscar')

@section('contenido')

<div class="mx-auto" style="width: 200px;">
  <form name="fbuscar" class="mb-3" action="{{route ('dades-buscar')}}" method="POST">
  @csrf      
  @error('matricula')
     <h6 class="alert alert-danger">{{$message}}</h6>    
  @enderror
 
  <label for="" class="form-label">Matricula</label>
  <input type="text"
    class="form-control" name="matricula" id="" aria-describedby="helpId" placeholder="">
  <button type="submit" class="btn btn-primary">Buscar</button>
  </form>
</div>
@endsection