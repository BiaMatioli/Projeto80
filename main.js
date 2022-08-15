var NomesArray = [];
    
function enviar()
{
    var Nomes = document.getElementById("nome1").value;
	NomesArray.push(Nomes);

	console.log(Nomes);
        
    console.log(NomesArray);
    var ComprimentoArray = NomesArray.length;
    console.log(ComprimentoArray);
	document.getElementById("ExibirNomes").innerHTML=NomesArray.toString();
	
   }

function organizar()
{
	NomesArray.sort();
	var i= NomesArray.join("<br>");
    console.log(NomesArray);		
	document.getElementById("divorganizar").innerHTML=i.toString();
	}

function mostrar()
{
	var i= NomesArray.join("<br>");
	console.log(NomesArray);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("OrganizarBotao").style.display="block";
	}

function pesquisar()
{
	var pesq= document.getElementById("pesq1").value;
	var encontrado=0;
	var j;
	for(j=0; j<NomesArray.length; j++)
		{
			if(pesq==NomesArray[j]){
				encontrado=encontrado+1;
			}	
		}
	document.getElementById("p2").innerHTML="Nome encontrado "+encontrado+" vez(es)";
	console.log("Nome encontrado "+encontrado+" vez(es)");
}