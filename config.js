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
            alignment: 'right',
            
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
            id: 'ninth-slide',
            alignment: 'left',
            
            title: 'The Initial Movements',
            image: '',
            description: 'Differently from previous conflicts of the time, this war started with Napoleon on the defensive faction and having to react to his enemy’s movements. On April 10, the Austrians began their invasion of the French territories, and its not until April 17 that Napoleon arrives from Paris. In the interim, his army was in disarray due to miscommunication and a lack of high-level leadership. On the 17 of April, he issues new commands and all his forces get arranged in their corresponding position of war by April 19. <br> <br>This map has the positions of Napoleon’s army by April 19. Napoleon’s original plan is to make the II and IV Corps his maneuver mass to pin the Austrian left wing while encountering the main Austrian army with his VII and III Corps up north. It begs to note that Napoleon did not know the actual location of the main force of his enemy which led to the further correction and impressive maneuvers seen in the rest of the campaign.',
            location: {
                center: [11.42502, 48.76716],
                zoom: 9.2,
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
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: 'initial',
                      opacity:1,
                      
                  },
                   {
                    layer: 'initial names',
                      opacity:1, 
                     
              
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
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                  {
                  layer: 'initial',
                    opacity:0
                },
                 {
                  layer: 'initial names',
                    opacity:0
                }, 
                {
                    layer:'nap2dots',
                    opacity:1
                    
                },
                  {
                  layer:'nap2names',
                    opacity:1
                },
                 {
                  layer:'nap2fig',
                    opacity:1
                }
                
              


               
            ]
        },
        {
            id: 'tenth-slide',
            alignment: 'left',
            
            title: 'The Landshut Maneuver',
            image: 'images/Napoleon line.gif',
            description: 'In this map we can clearly see what is denominated as the Landshut Maneuver. Napoleon moves his maneuver mass (IV Corps) to cut the Austrian army at Landshut believing that the main army of the Austrians was on the south side of the plain and not encountering the III corps forces. On the Austrian side, we see that their movements result in the Battle of Abensberg which had a non-unified front of over 25 miles wide. <br> <br>This map summarizes the actions of April 20-21without delving into details of the units in the main front. We can also observe that the French army under the direction of General Lannes and his section of the III Corps divides the Austrian left wing from the center, leading them to retreat towards Landshut. The French suffered their own loss resulting in Austrian control of the bridge at Regensburg providing the Austrians a passage to the lands north of the Danube River. <br> <br>In the above graph we can see the rate of advance of Napoleon’s maneuver groups, which greatly outpaced the rest of his army due to the nature of their mission. This graph also includes the corps movements until their arrival in Vienna almost 2 weeks later, for purposes that later will be made evident.',
            location: {
                center: [11.52, 48.76716],
                zoom: 8.85,
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
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                   {
                    layer:'nap2dots',
                    opacity:1
                    
                },
                  {
                  layer: 'nap2names',
                    opacity:1
                },
                 {
                  layer: 'nap2fig',
                    opacity:1
                }
               


                

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
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
              
                   {
                    layer:'nap2dots',
                    opacity:0
                    
                },
                  {
                  layer:'nap2names',
                    opacity:0
                },
                 {
                  layer:'nap2fig',
                    opacity:0
                }, 
                {
                    layer:'regcol',
                    opacity:1
                }, 
                {
                    layer:'reglines',
                    opacity:1
                }, 
                {
                    layer:'regtitles',
                    opacity:1
                }, 
                {
                    layer:'regdots',
                    opacity:1
                }, 


               
            ]
        },
             {
            id: 'eleventh-slide',
            alignment: 'left',
            
            title: 'Conquering Regensburg',
            image: '',
            description: 'At this point of the campaign Napoleon still believes that he has defeated the main section of the army which is why he sends a contingent to pursue them. Therefore, he had left his III and VII Corps, which amounted to 36,000 soldiers against the Austrian main force of 75,000. It is not until the morning of April 22 when Napoleon gains knowledge of his forces’ precarious position and therefore orders the II and IV Corps to redirect from their south and west positions to Eckmuhl. <br> <br>This was a crushing blow to the Austrians due that now the numerical advantage had disappeared with almost 100,000 French troops present at the battle. This led Archduke Charles to a general retreat through Regensburg. <br> <br>This first section of the campaign is one of the most impressive feats that Napoleon accomplishes in his career. For the first time he is facing an opponent with a similar corps structure, with an initial numerical disadvantage, in a defensive campaign. We also see that at no point during the 6 days of constant moves or fighting is Napoleon able to observe the entirety of either force. These encounters clearly demonstrated the sequential and simultaneous operations precept of operational art in addition to a commander with a broad operational vision. We can also observe that Napoleon’s generals had ahigh degree of autonomy when deciding the small-level tactics that they were using at each of the battles while he directed the whole of the army and its components separately.',
             location: {
                center: [11.67198, 48.76782],
                zoom: 8.86,
                pitch: 15,
                bearing: 0,
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
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                   {
                    layer:'nap2fig2',
                    opacity:0
                    
                },
                  {
                  layer:'nap2names',
                    opacity:0
                },
                 {
                  layer:'nap2fig',
                    opacity:0
                }, 
                  {
                    layer:'regcol',
                    opacity:1
                }, 
                {
                    layer:'reglines',
                    opacity:1
                }, 
                {
                    layer:'regtitles',
                    opacity:1
                }, 
                {
                    layer:'regdots',
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
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'2napdates',
                    opacity:1
                }, 
                {
                    layer:'second-nap',
                    opacity:1
                }, 
                   {
                    layer:'nap2fig2',
                    opacity:0
                    
                },
                  {
                  layer: 'nap2names',
                    opacity:0
                },
                 {
                  layer: 'nap2fig',
                    opacity:0
                }, 
                    {
                    layer:'regcol',
                    opacity:0
                }, 
                {
                    layer:'reglines',
                    opacity:0
                }, 
                {
                    layer:'regtitles',
                    opacity:0
                },
                {
                    layer:'regtitles',
                    opacity:0
                }, 
                


               
            ]
        },
        {
            id: 'twelveth-slide',
            alignment: 'left',
            
            title: 'The Biggest Loss',
            image: 'images/Rplot01.png',
            description: 'After having won and paused the Austrian advance into French territory, Napoleon halts his army to recuperate from the 6 days of constant fighting and maneuvers. In the following two weeks Napoleon presses on to Vienna and conquers the city on May 11-12 but not before the Austrian armies had crossed the Danube and burned the bridges, keeping control of the eastern plains of the Danube. <br> <br>A week later, Napoleon decides to ford the river 4 miles down from Vienna and attack the main Austrian army. Due to the Austrian’s command of the terrain and the fact that all the French army had to come through a series of bridges that were broken repetitively, this was an utter disaster for the French. The lack of intelligence and preparation due to the overconfidence of the French corps resulted in the first defeat that Napoleon had suffered in all his years of command. Here we could see that on a tactical and strategic level the Austrians could match the French army almost perfectly and, in this case, exceeded all expectations including those of Napoleon himself. <br> <br>In the graph above we can see how badly the losses for the French army were; almost 25% of their army dead or wounded including multiple high-ranking commanders. The Austrian army also suffered heavy losses, but their objective had been accomplished.',
            location: {
                center: [12.14211, 48.39876],
                zoom: 6.38,
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
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'2napdates',
                    opacity:1
                }, 
                {
                    layer:'second-nap',
                    opacity:1
                }, 
                {
                    layer:'regcol',
                    opacity:0
                }, 
                {
                    layer:'reglines',
                    opacity:0
                }, 
                {
                    layer:'regtitles',
                    opacity:0
                }, 
                {
                    layer:'regdots',
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
                    layer: 'ADDline',
                    opacity:1
                }, 
                {
                    layer:' additionals-and-ending',
                    opacity:1
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
                    layer: '2napline',
                    opacity:1
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
                    layer:'ae-date',
                    opacity:1
                }


               
            ]
        },
        {
            id: 'thirteen-slide',
            alignment: 'right',
            
            title: 'The Last Chapter & Analysis',
            
            description: 'After Napoleon’s biggest loss, he decides to take a 6-week operational hiatus to his campaign. This is called an operational break because the following operations are not separate to the previous campaigns, this is purely a logistical break while Napoleon manages to devise his ultimate strategy and move all the pieces into their correct start points. One of his most important actions during this time is to amass a great number of men, uniting his army of Germany with  his campaigners from Italy and Marmont’s forces. Secondly, he has guns brought from all over the empire to be able to match the Austrian artillery which was so dangerous to him during the battle of Aspern-Essling. Third and most importantly he embarks on one of his greatest military engineering feats by building a gigantic artillery battery on the shores of Lobau island in the middle of the Danube. In addition, to the battery he builds a series of pile bridges to ensure that the disasters of the first battle are not repeated. <br>While all the battles of the last few months had been happening it is important to remember that in the rest of the French empire there is war in Spain, Italy and even an amphibious operation by the British. All of these are dealt by Napoleon in one indirect way or another, and this fact speaks volumes to the control that he had over his territories. <br> <br>At the end of the six week pause we see a decisive but bloody battle with estimates between 160,000 to a 185,000 soldiers on the French side and 135,000 by the Austrians. With a combined loss of life of almost 80,000 soldiers this battle routed the Austrian army from its defensive position but just resulted on the surrender of the Austrian army and not its complete destruction as in Napoleon’s victory in Austerlitz or Jena. <br> <br> In conclusion of the whole campaign we have seen clearly how Napoleon’s corps structure in addition to his swift command and maneuvers embody the five precepts of operational art. We see a force with clear goals, swift action and unsupervised minutia which are taken care of by lower-level commanders. In addition we see a  pause in an operational timeline and a division between his overall goals of destruction and what could be achieved realistically by his methods of operations.',
            image: 'images/mpa.png',
            location: {
                center: [18.30782, 47.05676],
                zoom: 5.88,
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
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: 'ADDline',
                    opacity:1
                }, 
                {
                    layer: '2napline',
                    opacity:1
                }, 
                {
                    layer:'additionals-and-ending',
                    opacity:1
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
                    layer:'ae-date',
                    opacity:1
                }
                


                

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
                    layer:'political',
                    opacity:0
                    
                }, 
                {
                    layer:'names',
                    opacity:0
                    
                },
                {
                    layer: 'ADDline',
                    opacity:0
                }, 
                {
                    layer: '2napline',
                    opacity:0
                }, 
                {
                    layer:'additionals-and-ending',
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
                    layer:'ae-date',
                    opacity:0
                }, 
                {
                    layer:'mongol-empire-boundaries',
                    opacity:0.3
                    
                },
                {
                    layer:'textmongol',
                    opacity:1
                    
                },
                {
                    layer:'central-europe',
                    opacity:0.3
                    
                },
                {
                    layer:'texteurope',
                    opacity:1
                    
                }, 
                
            ]
        }, 
        {
            id: 'second-slide',
            alignment: 'right',
            
            title: 'Map of Eurasia in 1240',
            image: 'images/states.png',
            description: 'The next six maps will explore the Eastern European Campaign of 1241 undertaken by the Mongols under General Subotai. The purpose of these will be to explore the elements of operational art and general tactics present in their campaign. <br> <br> In this specific map we can observe the extent of the Mongol empire in the year 1240. Also mapped is the Kingdom of Hungary and territories of what today is Poland to put them into perspective with the Mongol Empire’s might at the time.  In addition, the above graph compares the empire’s extent to different sovereign powers throughout history, so we can grasp how big the Mongol empire actually is.',
            location: {
                center: [107.36297, 46.92184],
                zoom: 2.36,
                pitch: 0,
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
                    opacity:0.3
                    
                },
                {
                    layer:'textmongol',
                    opacity:1
                    
                },
                {
                    layer:'central-europe',
                    opacity:0.3
                    
                },
                {
                    layer:'texteurope',
                    opacity:1
                    
                }, 
                
            ],
            onChapterExit: [
                {
                    layer:'cities-initial-approach',
                    opacity:1
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:1
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
                
               
            ]
        },
        {
            id: 'third-slide',
            alignment: 'left',
            
            title: 'Initial Approach of Mongol Campaign',
            
            description: 'After having control over the territories of the Kievan Rus in what is today Russia , the Mongols decided to invade the eastern Europe plains. Some historians think that the number of soldiers in this invasion was somewhere around 100,000 to 120,000 but this number may have been largely exaggerated by the enemies of the Mongols who credited their success only to their ferocity and numbers instead of their careful planning. This was not the first incursion of the Mongol in the region but it was the first and only one that entailed a multi-tiered invasion plan. The whole campaign was directed by Subotai who was a general under Genghis Khan and had continued serving after his death. On December of 1240 the Mongols invade Kiev and proceed to move through the region with relative ease arriving to the cities of Prezhsmyhl and Galych. These two cities would serve as their staging areas for the next few months.',
            location: {
                center: [23.72882, 50.76191],
                zoom: 6,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer:'cities-initial-approach',
                    opacity:1
                    
                },
                {
                    layer:'cities-initial-approach-route',
                    opacity:1 
                    
                },
                {
                    layer:'raids-in-poland',
                    opacity:0
                    
                },
                {
                    layer:'raids-in-poland-copy',
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
                    opacity:1
                    
                },
                {
                    layer:'raids-in-poland-copy',
                    opacity:1
                    
                }, 
              
               
            ]
        },
        {
            id: 'fourth-slide',
            alignment: 'left',
           
            title: 'The raids of the North',
            
            description: '	For the months of January and February of 1241, the Mongols raided the Polish kingdom extensively particularly their southeastern border. In this map we can see a heatmap distribution of places that are mentioned in the historical chronicles to have been attacked or sacked by the Mongols during this two month time frame. At the start of these raids most of the powers of the area concluded that the Mongols intended to focus their attack in the norther region of Eastern Europe. <br> <br> We will see later on that this proved to be just a ruse in Subotai’s masterful plan of invasion. Another vein of scholars think that the wings attacking the Polish kingdom were meant to support the main campaign into Hungary but that this plan was never realized. But what is undeniable is that these raids served as masterful distraction for their consequent campaign. These raids led the powers of the area to be on high alert and concentrate their forces in single cities, making decisive battles more likely in the rest of the campaign.',
            location: {
                center: [20.39702, 50.39422],
                zoom: 6,
                pitch: 40,
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
                    opacity:1
                    
                },
                {
                    layer:'raids-in-poland-copy',
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
                    layer:'3-prong-approach',
                    opacity:1
                    
                },
                {
                    layer:'middle-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'north-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'south-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'enemies-on-first-part',
                    opacity:1
                    
                }, 
               
               
            ]
        },
        {
            id: 'fifth-slide',
            alignment: 'left',
           
            title: 'The Three Prong Approach',
            
            description: 'During the month of March we see that the Mongols committed to a full attack into all the territories of Eastern Europe. Subetei divided his army into three parts keeping the majority of his soldiers under his command for approaching the grandest bastion of resistance in Buda and Pest later on in the campaign. By March 15 the Mongols had already positioned themselves half a days march from the sister cities of the Danube. <br> <br>For their Polish branch it is estimated that 3000 warriors were assigned, and they started their attack at the same time as the main forced. By the end of the month (March 24) the Mongols had taken and burned the capital city of Kracow obligating Polish forces to retreat to Oppeln. <br> <br>The rest of the Mongol forces went with Qadan and Baidar to the southeast part of the Carpathians. These forces would later divide in two branches to invade the Transylvania region. The division of forces according to the intelligence gathered on the enemy’s risk level clearly shows the resource allocation tenet of operational art being practiced.',
            location: {
                center: [19.44638, 47.97865],
                zoom: 6,
                pitch: 45,
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
                    layer:'3-prong-approach',
                    opacity:1
                    
                },
               
                {
                    layer:'south-route-approach',
                    opacity:1
                    
                },
                {
                    layer:'enemies-on-first-part',
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
                    layer:'3-prong-approach',
                    opacity:0
                    
                },
              
                {
                    layer:'south-route-approach',
                    opacity:0
                    
                },
                {
                    layer:'enemies-on-first-part',
                    opacity:0
                    
                }, 
                {
                    layer:'endgame',
                    opacity:1
                    
                }, 
                {
                    layer:'dates',
                    opacity:1
                    
                }, 
                {
                    layer:'citynames',
                    opacity:1
                    
                }
               
            ]
        }, 
        {
            id: 'sixth-slide',
            alignment: 'left',
            
            title: 'The Coordinated End',
            image: 'images/MongolLine2.gif',
            description: 'After their initial incursion into Hungary and Poland, we can observe in the map that Qadan’s  and Baidar’s branches join the campaign in early April. This meant that they had to cross the Carpathian Mountain passes in coordination, miles apart, to descend upon the Transylvanian region simultaneously. At the same time, we can see that their early April attacks are done in the same time frame as the other two Mongol armies decide to press their advantage for Leignitz and Buda. <br> <br>Asides from their extreme coordination in a grand scale it begs to highlight the small-scale impressive tactics of the Mongol armies particularly with their treatment of the Hungarian King Bela IV and his army during the battle of Mohi. Here we see that Subotai engaged a numerically superior enemy of almost 100,000 men and due to his ingenuity by doing a night river crossing and pinning the enemy against the river, dealing a devastating blow to the Hungarian kingdom. <br> <br>In addition to the map we can observe the extreme swiftness of the Mongol squadrons by observing the distance they covered each day in the plot above. This clearly demonstrates how each division maintained independent command while still meeting the plan delineated by Subotai before the invasion. This level of coordination and planning can only be achieved by a deeply prepared commander with a great operational vision; Subotai. In addition, we can see the tenet of sequential and simultaneous campaigns throughout the entirety of the Mongol invasion.',
            location: {
                center: [18, 47.97865],
                zoom: 5.7,
                pitch: 35,
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
                    opacity:1
                    
                }, 
                {
                    layer:'dates',
                    opacity:1
                    
                }, 
                {
                    layer:'citynames',
                    opacity:1
                    
                }

                

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
                    opacity:1
                    
                }, 
                {
                    layer:'distance names',
                    opacity:1
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:1
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:1
                    
                }


               
            ]
        }, 
        {
            id: 'seventh-slide',
            alignment: 'left',
            
            title: 'The 3 day Masterpiece and Summary',
            image: 'images/rates.png',
            description: 'In this map we can see how the Mongols arranged their campaign for a simultaneous conquest perfectly. None of the kingdoms or principalities had enough time to help each other because they were all affected at the same time by the Mongol tumans. It is very impressive that all the most important cities of the region were taken within the same three days at more than 500 miles from each other. <br> <br>Now it begs to clarify that the Mongols had further steps to their campaign including securing the runaways of the main Hungarian army that escaped. Some historians also speculate that the Mongols had plans to conquer the rest of Europe but that these were never actualized<br> <br>Having discussed the campaign at length, we can start noting the parallels between Subotai’s tactics and Napoleon’s. In the graph above we can see that the Mongol units moved even faster than the fastest two units of napoleon. But it begs to note that on average Napoleon’s two units were faster than the whole of the Mongol army. This may be due to selection bias of the sample and begs further investigation. ',
            location: {
                center: [8.67398, 48.78430],
                zoom: 3.5,
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
                    opacity:1
                    
                }, 
                {
                    layer:'distance names',
                    opacity:1
                    
                }, 
                {
                    layer:'distancetitles',
                    opacity:1
                    
                }, 
                {
                    layer:'distancedate',
                    opacity:1
                    
                }

                

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
