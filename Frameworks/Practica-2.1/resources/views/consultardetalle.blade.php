@extends('plantilla')

@section('titulo', 'Consultardetalle')

@section('contenido')
<p>Mostrar resultat de la cerca. Resultats: {{count($dades)}}</p>
<ul>
            <li>{{ $dades[0]->matricula }}</li>
            <li>{{ $dades[0]->marca }}</li>
            <li>{{ $dades[0]->modelo }}</li>        
    </ul>
@endsection