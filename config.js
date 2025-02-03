var config = {
    style: 'mapbox://styles/hernandezj/cl1cwrzt2001815rycd6y7wpe',
    accessToken: 'pk.eyJ1IjoiaGVybmFuZGV6aiIsImEiOiJja3kzemNiYjIwNnp3MnZwOGlycXZ1eHZhIn0.kvZTi2pVBDnYQGwQIrqCVw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Complex Camapigns of Old',
    subtitle: 'Mongol and Napoleonic Operational Art',
    byline: 'By Jose Hernandez',
    footer: '',
    chapters: [
        {
            id: 'first-slide',
            alignment: 'center',
            
            title: 'What is Operational Art & why is its origin disputed?',
            description: 'In the next 12 maps, we will be questioning the elements and possible origins of the theory of operational art in modern warfare. Operational art is defined by the US army as “the skillful employment of military forces to attain strategic and operational objectives within a theatre through the design, organization, integration, and conduct of theatre strategies, campaigns, major operations and battles.” The reason why it is so important and revolutionary to past warfare is because it added a level of complexity that did not exist in classic warfare tactics.Its origin has usually been attributed to Napoleon and it is true that most of the theoretical successors did indeed analyze his campaigns as models. But it is the purpose of this project to demonstrate the existence of elements of operational art in the Mongol campaign of 1242 and paint a grain of doubt in our commonly held belief of Napoleonic origin. <br> <br>To do this the first six maps shall map the Napoleonic campaign of 1809 to observe and dictate the traditional conception of operational art. After this definition has been established the next set of maps shall set out to challenge this definition by pointing out the elements of Mongol warfare that are similar or identical to modern operational art. The elements to be noted are the following conditions of operational art as put forth by the US Army: <br> <br>a. The identification of military strategic goals<br> <br>b. Establishing of military conditions<br> <br>c. Sequential and simultaneous operations <br> <br>d. Resource allocation <br> <br>e. Commanders with broad operational vision.',
            image: 'images/Mongols.png',
            location: {
                center: [64.97469, 50.677601],
                zoom: 2.82,
                pitch: 20,
                bearing: 0.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                }, 
                {
                    layer:'middle-route-approach',
                    opacity:0
                    
                },
              
                {
                    layer:'enemies-on-first-part',
                    opacity:0
                    
                },
               
                {
                    layer:'ae-date',
                    opacity:0
                },
                {
                    layer: 'nap2names',
                      opacity:0
                  }, 
                  {
                    layer: 'regtitles',
                      opacity:0
                  },
                  {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
 

               
               
               

                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:' 2napdates',
                    opacity:0
                }, 
                {
                    layer:'2napline',
                    opacity:0
                }, 
                {
                    layer:'2napdates',
                    opacity:0
                }, 
                {
                    layer:'second-nap',
                    opacity:0
                },
                {
                    layer: 'nap2names',
                      opacity:0
                  }, 
                  {
                    layer: 'regtitles',
                      opacity:0
                  }, 
                  {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                
                
               
            ]
        },
        {
            id: 'eight-slide',
            alignment: 'left',
            
            title: 'The Franco-Austrian War',
            image: '',
            description: 'The Franco-Austrian War of 1809 also known as the War of the Fifth Coalition was waged between Napoleon and his client states versus the Austrians and their coalition of European states. The war was waged all across Europe but the main theater of war was Central Europe in the Bavarian region with the biggest battles being waged in Vienna and the surroundings of Regensburg. Therefore, our analysis will focus on the main theater in which Napoleon exercised the most influence but will also mention sporadically Napoleon’s influence in other parts of the war such as the Italian campaign. We picked this particular campaign because it has some of Napoleon’s most complicated maneuvers and it’s the first time he faces an enemy with a similar army structure.',
            location: {
                center: [20.726, 41.682],
                zoom: 2.85,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                }, 
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                },
                {
                    layer:'political',
                    opacity:0.4
                    
                }, 
                {
                    layer:'names',
                    opacity:1
                    
                },


                

            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:0
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:0
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:0
                    
                },
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0
                    
                },
                {
                    layer:'textmongol',
                    opacity:0
                    
                },
                {
                    layer:'central-europe',
                    opacity:0
                    
                },
                {
                    layer:'texteurope',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:0
                    
                }, 
                {
                    layer:'dates',
                    opacity:0
                    
                }, 
                {
                    layer:'citynames',
                    opacity:0
                    
                }, 
                {
                    layer:'distance',
                    opacity:0
                    
                }, 
                {
                    layer:'distance names',
                    opacity:0
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:0
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:0
                    
                }, 
                {
                    layer:'Napnames',
                    opacity:0
                }, 
                {
                    layer:'1napline',
                    opacity:0
                }, 
                {
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                  layer: 'initial',
                    opacity:1
                },
                 {
                  layer: 'initial names',
                    opacity:1
                }


               
            ]
        },  
        {
            id: 'last-slide',
            alignment: 'center',
            
            title: 'Conclusion',
            description: 'Having overviewed both campaigns in descriptions, maps, and statistics, we can generate two distinct conclusions based on the evidence we have. The first is that based on the descriptions alone it is clear that the Mongol armies did indeed practice some version of operational art if not embody all precepts delineated today by the US Army. We saw in the previous writing how they exemplified a commander with operational vision, smart resource allocation, and sequential and simultaneous operations. This last point particularly is emphasized throughout the entirety of the maps and their brilliant campaigning. <br> <br>In terms of military goals, we can tell by Subotai’s plans that his tactics were planned to achieve the destruction of the European kingdoms. In addition, the section on the Polish raids makes this clear by demonstrating a smart use of distraction and misdirection to the enemy on a grand scale. <br> <br>Having addressed the theoretical explanations we can see that the statistical work of the graphs above also supports the conclusions here put. In the only category that the Mongols don’t meet Napoleon’s standards is that of the campaign duration and the troop numbers. But even if we were to map their highest numbers they would still be 2/3 of what napoleon had during his campaign. In addition, we see that the distance of Subotai to the branches of his army is more than that of napoleon to his branches even when accounting for the Italy campaign or the English amphibious operations.Also a key difference that must be noted is that the Mongols issued commands rarely in the interim of their campaigning but instead followed their initial plan to perfection with very small modifications unlike napoleon who had to make several daily adjustments. This could point to the malleability aspect of their units and the increased distances of the Mongols but it is worth studying further as key aspect separating modern operations from those practiced by the Mongols. <br> <br>In conclusion, even though the Mongols didn’t use the corps structure that provided the building blocks for operational art as we know it today by western military standards, they practiced the precepts of operational art to great extent and should be considered early practitioners or at least original contributors to the global theory of operational art. <br> <br> Sources:<br> <br>Horward, D. D., & Leggiere, M. V. (2016). Napoleon and the operational art of war: Essays in honor of Donald D. Horward. Brill.<br> <br>Epstein, R. M. (1994). Napoleons last victory and the emergence of modern war. University Press of Kansas.<br> <br>Sverdrup, C. F. (2020). The Mongol Conquests: The Military Operations of Genghis Khan and Sube’etei (Reprint ed.). Helion and Company.',   
            image: 'images/Conclusionre.png',
            location: {
                center: [64.97469, 50.677601],
                zoom: 2.82,
                pitch: 20,
                bearing: 0.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ], 
            onChapterExit: [

            ], 
        }

    ]
};
