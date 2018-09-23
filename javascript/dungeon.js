


var paard = 0
var zwaard = 1
var Health = 200
var Ridder = 100
//start
alert('je word wakker in een donkeren kamer je kijkt om je heen je zit in een soort gevangenis je weet niet waarom je hier ben je moet ontsnappen, Je ziet een zwaard  en een deur je probeert hem te openen, maar er kwam geen beweging in je moet iets anders proberen');
    var room1 = prompt('wat doe je (I =Investigate/A =Aanvallen) ');
     if(room1 == "I"){
     alert("je ziet een een slot op de deur mischien kan je hem breken met je zwaard");
     alert("je slaat met je zwaard op de slot de deur is open je loopt door de deur en komt uit in een gang ")  ;  
     alert("je ziet een gang je kan naar links en naar rechts ");
           //Links rechts hall   
        var room2 = prompt('Wat ga je doen je kan links of naar rechts gaan (L=links/R=rechts');
            if(room2 == "L"){alert("je loopt de gang door je kijkt om je heen het is heel donker je ziet bijna niks, je loopt all even door de gang opeens zie je een fakkel");
           
             alert("je pakt de fakkel op je loopt verder je ziet opeens een Ridder hij loopt op je af hij pakt zijn zwaard jij pakt die van jou je moet jezelf verdedigen")
             var Battle = prompt("Wat ga je doen Je kan aanvallen of een potion gebruiken(A=aanvallen/GA=Guardattack");
                
                //battle
                if(Battle == "A"){alert("je steekt de ridder op een zwak gedeelte van zijn armor hij neemt een stap naar achter en hij stak je door in je buik");
                 alert("Je valt naar de grond het laatste wat je ziet is dat de Ridder wegloopt ");
                 alert("je bent gestorven")
                     
                     
                   }else if(Battle == "GA"){alert("je probeert een counter attack te doen tegen de ridder je deed het met succes(de ridder nam 50 damage)");
                	 Ridder -= 50
                      console.log(Ridder)
                      Battlestage2 = prompt("nadat je de ridder aanviel loopt hij langzaam achter uit nu is je kans je hoeft hem aleen aftemaken(A=Aanvallen)");
                 
                 	      if(Battlestage2 == "A"){alert("je steekt de ridder op een zwak gedeelte van zijn armor hij neemt een paar stappen terug");
                            alert("de ridder valt terug aan je wordt, net geraakt maar je hebt een kleine wond gekregen maar het valt well mee");
                            Ridder -= 50
                            Health = 160
                            console.log(Ridder)
    
                              if (Ridder <= 0){alert("de ridder probeert je te aanvallen maar zijn wonden waren te erg de ridder is dood");
                                 alert("je loopt verder en je ziet drie deuren elk heeft een standbeeld ernaast de eerste deur heeft een draak de tweede een symbool van water en de laatste deur is een beeld van een wolf");
                                 var Deuren = prompt("Welke deur ga je door?(draak/water/wolf)");
                                        
                                  
                                 if(Deuren == "draak"){alert("je opent de eerste deur je weet niet waarom wat nou als een draak achter de deur zit ");
                                                  alert("maar iedereen weet dat draken niet bestaan je opent de deur en ziet een draak tot je verbazing gelukig heeft de draak je niet gehoord je loopt langzaam langs de draak je opent de deur");
                                                  alert("je hoort dat de draak wakker werd door het geluid van de deur je deed de deur snel dicht en blokeerden het met een kast ");
                                                  alert("je hoort de draak de deur aanvallen je loopt snel door,Na een tijdje zie je licht je rent naar het licht toe,Je kijkt omje heen je ziet de lucht en je kijkt naar beneden om een afgrond te zien naast je liggen wat touw en een pickhouweel je neemt ze beiden mee");
                                           var naarbeneden = prompt("je moet nu een weg kiezen om naar beneden te gaan je kan via de berg naarbenden of je neemt het pad(Naarbeneden via de berg=NB/Het pad volgen=PV");
 
                                     if(naarbeneden == "NB"){alert("je slaat de pickhouweel in de grond,daarna bind je het touw omde pickhouweel je hoopt dat de pickhouweel niet los komt");
                                             alert("je klimt naarbeneden je komt bij een platform terecht je ziet een grot");
                                        var Grot = prompt("ga je de grot in?(ja/nee");
                                            if(Grot == "ja")
                                            {
                                                alert("je loopt de grot in je pakt je fakkel om te zien je ziet dat de weg naarbeneden loopt na een tijdje lopen zie je licht je loopt naarbuiten en ziet dat een group Ridders je opwacht")
                                                     alert("je ziet een pad dieper de grot in,je ziet ook wat dynamite")
                                                 var GrotRidders = prompt("je ziet wat dynamite en een ander pad wat ga je doen (de ingang opblazen van de Grot = DG/D/AP")
                                         
                                               if(GrotRidders == "D")
                                              {
                                                alert("je goeit de dynamite op de ridders ze probeerden het to onwijken maar het was te laat je rent door de uitgang je ziet wat paarden je springt snel op het paard je vlucht ver van de gevangenis")
    
    




                           }  else if(GrotRidders == "DG"){alert("je hebt de uitgang opgeblazen je rent nu richting de enige kant die je opkangaan je komt uit op een doodlopend einden je probeert terug te lopen om te zien dat de Ridders  dat hebben opgeblazen je ziet nu vast");
                             alert("je fakkel is uitgebrand je zit nu in het donker helemaal alleen");
                             alert("je weet dat je dit niet zal overleven je bedenkt je of dit het well waard was wat nou als je bleef en mischien vrijgelaten werd maar dat maakt niet meer uit,je steekt je zelf in je maag zodat je niet hoefde te verhongeren");
                             alert("je bent dood");
                               
                               //faaleinde
                                }
                               else
                               {
                                ("je volgt de gang dieper de grot het loopt dood je geeft over omdat je niet in deze plek wou sterven je werd daarna in een anderen gevangenis opgesloten")
                            }




                                           
                                 
                              }else if(Grot == "nee"){alert("je gaat verder via het touw je voelt opeens beweging je kijt naar boven en ziet dat een Ridder de pickhouweel naarbeneden gooit")
                                alert("je valt naarbeneden op een rots")
                                 alert("je bent gespietst")}
                           }else if(naarbeneden == "PV" ){alert("je volgt het pad naarbenden om na een tijdje een groep van 7 Ridders te zien toen ze je zagen rende ze op je af je probeerde te vluchten maar je werd door een pijl geraakt in je knie")    
                             alert("i was an adventurer like you until i took an arrow to the knee")}

                       }else if(Deuren == "water"){alert("de kamer begint vol te lopen met water je probeert te ontsnappen maar de deur achter je was dicht gegaan het water begint de kamer te vullen je probeert door de deur te zwemen ")
                         alert("nadat je door de deur zwemden zag je dat het water door een gat kwam je probeerde er doorheen te gaan maar er waren tralies die je blokeerden")
                        alert("je bent verdronken")
                       }else{alert("je opent de derde deur er kwamen spontaan acht wolven op je af je probeerden jezelf te verdedigen maar de wolfen waren te snel en met teveel")
                        alert("je bent opgegeten door wolven")} 
                   } 
                }
             }
           
         }else if(room2 == "R"){alert("je loopt de gang door opeens hoor je een geluid onder je,het was een val")
         alert("je moet snell iets doen anders activeert de val")
         var keuze = prompt("wat ga je doen je kan rennen of iets anders op de presure plate leggen(rennen= ren/iets op de presureplate leggen=PL)")
        if(keuze == "ren"){alert("je rent zo snel als je kan je hoort de val achter je activeren je bent ontsnapt aan de val")
          alert("je komt uit op een afgrond naast je heb je een trap naarbeneden je hebt een sleutel nodig voor de deur er staat een beeld van een griffin")
        var key = 0
        var griffindeur = prompt("links van je ligt een sleutel met een griffin hoofd daarnaast licht een anderen sleutel je neemt hem maar mee voor de zekerheid rechts van je een sleutel met een doodshoofd welke neem je(griffin = GRIF/Doodshoofd= DOOD")
          if(griffindeur == "GRIF"){alert("je loopt door de deur")
           alert("je ziet nog een deur je loopt er doorheen en je kijkt omjeheen je ziet dat je in een barrack zit met allemaal ridders die aantafel zitten")
           if(key == 1 || zwaard == 1){alert("de ridders dachten dat je bij hun hoorde ze zeiden dat je je uniform aanmoest doen")
             var Garmor = prompt("doe je armor aan ? J/N")
              if(Garmor == "J"){alert("je doet wat armor aan")
              var armor = 1
             var game = prompt("een van de ridder wilt een spel met je doen voor wat geld doe je mee(J/N)")
              if(game == "J"){alert("De ridder legt uit de regels je moet hoger gooien dan de ridder met de dobblestenen ")
               var Nummer = prompt("kies een nummer tussen de 10") }
                  if(Nummer > 7){alert("je hebt 117 Goudstukken gewonnen")
           alert("je loopt naar buiten om bij een afgrond te komen je ziet een pickhouweel en een stuk touw")
           alert("je loopt naarbeneden het pad af na een tijdje kom je wat paarden tegen neem je een paard met je mee")
          var route2 = prompt("ja/nee")
           if(route2 = "ja"){alert("je neemt een paard mee")
            alert("je word aangevallen door een bandiet")
                var paard = 1
               if(!(armor == 0)){alert("je sloeg een keer met je zwaard op de bandiet en hij stierf")
               alert("je loopt verder je ziet wat ridders")
               if(paard == 1){alert("je springt op je paard en vlucht ver van de gevangenis je komt uitendelijk uit bij een stad waar mensen je kende je komt er later achter waarom je gevangen was genomen")
                }else if(paard = 0){alert("je bent gevangengenomen door mensen die zich voordeden als een van de Ridders later lukt het je om vrij te komen")
                 alert("na een tijdje zie je een stad je gaat naarbinnen en vraagt waar je kan overnachten je werd gewezen naar een huis")}
              }else{alert("de bandiet heeft je vermoord")}

                 }else{alert("de Ridder valt je spontaan aan je probeerde terug te vechten maar de ridder trapde je van een cliff af")
                  alert("je bent dood")}
                 }else if(Nummer <= 7){alert("je hebt verloren omdat je geen geld heb kost dit je leven")}
                 else if(Nummer == 10){alert("je probeerde vals te spelen daarom ben je dood")}
                  else{alert("valspelers sterven")}
               

                }else if(Garmor == "N"){alert("je word aangevallen door een bandiet")
                alert("de bandiet heeft je vermoord")}
               }

                
          
        }else if(griffindeur == "DOOD"){"je bent doodgegaan"}
        }else if(keuze = "PL"){alert("de vall activeert alnog er kwamen spontaan spikes door de grond je werd gespietst door een van de spikes")
         alert("je bent dood") }
                          
        }
  

 } else if(room1 == "A"){alert("je begint spontaan op de deur te slaan met je zwaard maar het had geen nut je zwaard brak had je maar moeten kijken of er mischien een zwak punt was")  
     alert("je hebt nu geen weg meer uit je ziet later dat er een slot zat op de deur die je kon openbreken maar dat heeft geen nut meer je zal sterven in deze cell")
     alert("Je hebt uitendelijk maar zelfmoord gepleegd omdat je geen hoop meer had om te ontsnappen")
 }
   
 
     
