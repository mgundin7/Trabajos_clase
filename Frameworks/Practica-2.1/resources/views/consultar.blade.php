@extends('plantilla')

@section('titulo', 'Consultar')

@section('contenido')
  <ul>
    @foreach ($dades as $i)
     <li><a href="/consultar/{{ $i->matricula }}">{{ $i->marca }}</a></li>  
    @endforeach
  </ul>
@endsection