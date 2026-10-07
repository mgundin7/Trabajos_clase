@extends('plantilla')
@section('contenido')
  <ul>
    @foreach ($dades as $i)
    <li>{{ $i->matricula }} {{ $i->marca }} {{ $i->modelo }}  <a href="/modificar/{{ $i->matricula }}">Editar</a></li>  
   @endforeach
  </ul>
@endsection