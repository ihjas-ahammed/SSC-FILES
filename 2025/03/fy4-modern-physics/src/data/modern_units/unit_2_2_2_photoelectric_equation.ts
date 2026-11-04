import { Unit } from '../../types';

export const UNIT_2_2_2_PHOTOELECTRIC_EQUATION: Unit = {
  id: "unit-2-2-2",
  title: "Einstein's Core Equation & Verifications",
  description: "T: Photos as Quantas = hf (Eq 2.21 - 3.23), Ex 3.3 to Ex 3.5 & Milikan verification limits.",
  color: "duo-violet",
  lessons: [
     // ── 0 Activation ────────────────────────────────────
     {
      id: "les-optis1ggh2y",
      title: "Warm UP",
      description: "Getting head into Einstein Space frameworks.",
      icon: "Lightbulb",
      slides: [
         {
          id: "exsqp-test1as12",
          type: "quiz",
          title: "Logic Puzzles!",
          content: "Assume light arrives in dense packets not a flowing spread of butter. If an item needs exactly '4 tokens' to break boundings, BUT every individual light packet striking handles only giving uniformly strict '3 token items'! What behavior occurs?",
           options: [
            { id: "A", text: "You just capture two fast bounds accumulating 6. Bound releases safely intact parameters checked.", isCorrect: false, explanation: "Quantum limits restrict absorptions explicitly completely instantaneous isolated single bounds checks. Multi hits rarely/if ever overlap inside timeframe probabilities allowing combinations checks under regular non pulse operations limits." },
            { id: "B", text: "No escape occurs basically bound stuck perfectly lacking parameter minimum thresholds checks! ", isCorrect: true, explanation: "Perfect threshold model analog mapping real properties governing Light / Cut off frequency barriers bounds interactions."}
           ]            
        } 
      ] 
    },
      
    // ── Einstein Equation! ── 
    {
      id: "les-t-einsta2xs",
      title: "Building up Quantas Limits!",
      description: "Einstein Equation parameters boundaries (Phi / Eqn structures ).",
      icon: "Coins",
      slides: [          
          {
             id: "e-kksks1sthh219",
             type: "theory",
             title : "The Equation that altered realities", 
             content: "Instead of classical fluid logic Max Planck originally solved thermodynamics applying quantized restrictions over bounds.\nIn 1905, Einstein confidently scaled Planck' principles straight assigning core properties onto the actual literal $light.$  declaring true bundles existence (named:  *Photons*! )\n$$E = hf  =\\frac{hc}{\\lambda}$$ \n\nThe exact properties given : All electron limits interactions involves precisely perfectly singular bound ONE photon - One E- relationships!\nExcess bounding surplus kinetic velocities is derived universally exactly:\n \n**(Eq:  3.21) $\\quad  K_{\\max} =  hf -  \\phi$ **\n"                  
          },
          { 
               id:  "tkkssqs1sxtx" , 
               type : "quiz",
               title: "Mapping Equation Check",
               content: "$ K_{\\max}  =  hf   -    \\dots $ -> The formula mathematically works essentially equivalently representing an economics buy / payout purchase loop where hf maps cash supplied directly, and extra excess becomes outputted residual. \n\nWhat accurately mimics 'Price Component limit constraint parameters required' ? " ,
               options: [
                  {id : "aq", text : "$V_s$, the reversed external potentials limit boundary conditions voltages parameter setup bounds...", isCorrect: false, explanation: "Potentials relates mapping properties associated output measurement. Specifically relating $ev_S$ limits Kinetic parameter $K_m$" },
                   {id : "aqx" , text : " The Material's defined binding threshold specific boundaries bounds (i.g. $\\phi$) ", isCorrect : true , explanation : "Yes purely dependent on metal matrix compositions thresholds mappings."} 
               ]       
            },
           {  
              id :  "ckxsrqa73aassx"  ,
              type : "theory", 
              title :  "Extracting properties limit variables boundary targets: cutoff frequencies bounds checks (Eq 3.22)", 
              content :" At strict bounds limits checks  we seek precisely zero escaping bounds forces velocity residuals: Therefore making  $K_{max} =0 $, generating specifically minimum light bounds constraints boundaries frequency  $f_c$ calculations limit.\n \n $$ h \, f_c  - \\phi  = 0 $$ =>  $$f_c = \\frac{\\phi}{h}$$ \nAnd boundary limits for Wavelength constraints mappings giving:\n \n $$ \\text{Eq(3.23);    }  \\lambda_c  =\\frac{h\\,c}{\\phi} $$ .   Any photon boundary limit hitting wider (longer, therefore effectively lower Frequency/Strength parameters ) \\>  $\\lambda$ misses triggering bounds threshold entirely lacking potentials requirements." 
             }, 
             {
               id:"num4399q",
               type: "numerical" ,
               title: "Testing  Limit Properties Equations!", 
               content : "Check minimum limits ! Determine precise bounding  cutoff lambda parameter checks! Given arbitrary standard $\\phi =  4.52 \\text{eV}$  materials constraints! Convert into nanometer ($\text{nm}$)! [ Remember easy bounds  scale values matching constant constraints  $h_c = 1240 \\text{eV nm}$ helps!] ",
               numericAnswer:  274 ,             
               numericTolerance:   1         
             }          
        ]  
     },     

      // ── Exp. 밀리кан 플롯 ────      
     {       
          id:  "ekl2x78032kkakd",             
          title : " Millikan validation Plot ", 
          description : "Validations Limits Experimental Mapping.",        
          icon:  "Activity",                 
          slides: [                      
             {                
                 id :  "12xsdsxx" ,                       
                 type : "theory" ,                            
                 title: "Validation Limit Checking Millikans", 
                 content : "When replacing  $K$ bounds replacing the exact equivalent variable metric constraints $ e \\cdot V_s $, the Equation translates plotting specifically linearly matching   parameter equations. ($y=  mx $+ c)\n\n $$V_s    =     (\\frac{h}{e}) \\cdot f  \\quad  -    (\\frac{\\phi}{e}) $$\n\n This directly implies linear  Voltage bounds mappings. Changing varying tested Light Freq' variables experimentally validating completely plotting constants limits! \n If mapped plotting matches straight components constraints lines -> confirms entire theory parameters validity limitations checking!",
             },{                           
                  id: "axassvvs-ckksks" ,                  
                  type: "interactive_canvas" ,                             
                  title : "Analyzing graph features",
                  content :  "Observe variables limits interactions dependencies graphing values parameter intercepts thresholds points.",                           
                  interactiveCanvasId :"millikan-plot"  
           },    
           {                
              id:"xcssxsckxsrx",                                  
              type : "quiz",                     
              title :"Graph Analysis Checking bounds limit intercepts predictions! " ,            
              content : "Testing knowledge understanding limitations properties graphs points coordinates. Imagine replacing arbitrary surface metals samples limits bounds containing effectively far larger internal parameter $\\phi_{new}$ . Relative positioning bounds checks: Exactly how ought the graph curve transform modifications?",
               options : [             
                {  
                  id : "xasx11q", text : "Graph remains strict exactly anchored origin same parallel boundary intercepts points, completely identical overlaps." , 
                  isCorrect: false ,  explanation :"That literally assumes metals bounds share precise perfectly matching values parameters thresholds ! "},                            
                {id: "axxq", text : " Slope changes altering h constant scaling limits steepness varying values completely ", isCorrect : false , explanation : "h is universal invariant limit. Planck's parameter stays rigid constant scaling boundaries properties !"},   { 
                 id:  "wqqxxx21aa" ,text: " Shifts horizontally precisely further higher towards perfectly larger Frequency axes boundary interception coordinates!  ", isCorrect : true , explanation : "Yes purely straight shifts down lowering vertical limits while dragging zero-cross axis threshold constraints up right limits checking valid representations transformations. The intercepts literally precisely equals bounding  $\\phi $" }                            ]             
              }                                
        ]
    }
  ] 
};