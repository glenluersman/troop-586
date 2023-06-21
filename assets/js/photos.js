const photosEl = document.getElementById("gallery");
const photosEl1 = document.getElementById("gallery1");
const photosEl2 = document.getElementById("gallery2");

const rlfa23 = ["./assets/images/RLFA23/RLFA1.JPG","./assets/images/RLFA23/RLFA2.JPG","./assets/images/RLFA23/RLFA3.JPG",
                "./assets/images/RLFA23/RLFA4.JPG","./assets/images/RLFA23/RLFA5.JPG","./assets/images/RLFA23/RLFA6.jpg",
                "./assets/images/RLFA23/RLFA7.jpg","./assets/images/RLFA23/RLFA8.jpg","./assets/images/RLFA23/RLFA9.jpg",
                "./assets/images/RLFA23/RLFA10.jpg","./assets/images/RLFA23/RLFA11.jpg","./assets/images/RLFA23/RLFA12.jpg",
                "./assets/images/RLFA23/RLFA13.jpg","./assets/images/RLFA23/RLFA14.jpg","./assets/images/RLFA23/RLFA15.jpg",
                "./assets/images/RLFA23/RLFA16.jpg","./assets/images/RLFA23/RLFA17.jpg","./assets/images/RLFA23/RLFA18.jpg",
                "./assets/images/RLFA23/RLFA19.jpg","./assets/images/RLFA23/RLFA20.jpg","./assets/images/RLFA23/RLFA21.jpg",
                "./assets/images/RLFA23/RLFA22.jpg","./assets/images/RLFA23/RLFA23.jpg","./assets/images/RLFA23/RLFA24.jpg",
                "./assets/images/RLFA23/RLFA25.jpg","./assets/images/RLFA23/RLFA27.jpg","./assets/images/RLFA23/RLFA28.jpg",
                "./assets/images/RLFA23/RLFA29.jpg","./assets/images/RLFA23/RLFA30.jpg","./assets/images/RLFA23/RLFA31.jpg",
                "./assets/images/RLFA23/RLFA32.jpg","./assets/images/RLFA23/RLFA33.jpg","./assets/images/RLFA23/RLFA34.jpg",
                "./assets/images/RLFA23/RLFA35.jpg","./assets/images/RLFA23/RLFA36.jpg","./assets/images/RLFA23/RLFA37.jpg",
                "./assets/images/RLFA23/RLFA38.jpg","./assets/images/RLFA23/RLFA39.jpg","./assets/images/RLFA23/RLFA40.jpg",
                "./assets/images/RLFA23/RLFA41.jpg","./assets/images/RLFA23/RLFA42.jpg","./assets/images/RLFA23/RLFA43.jpg",
                "./assets/images/RLFA23/RLFA44.jpg","./assets/images/RLFA23/RLFA45.jpg","./assets/images/RLFA23/RLFA46.jpg",
                "./assets/images/RLFA23/RLFA47.jpg","./assets/images/RLFA23/RLFA48.jpg","./assets/images/RLFA23/RLFA49.jpg",
                "./assets/images/RLFA23/RLFA50.jpg","./assets/images/RLFA23/RLFA51.jpg","./assets/images/RLFA23/RLFA52.jpg",
                "./assets/images/RLFA23/RLFA53.JPEG","./assets/images/RLFA23/RLFA54.JPEG","./assets/images/RLFA23/RLFA55.JPEG",
                "./assets/images/RLFA23/RLFA56.JPEG"];
                
const wb22 = ["./assets/images/WB22/WB2.JPG","./assets/images/WB22/WB1.JPG","./assets/images/WB22/WB3.JPG",
              "./assets/images/WB22/WB3.JPG","./assets/images/WB22/WB4.JPG","./assets/images/WB22/WB5.JPG",
              "./assets/images/WB22/WB6.JPG","./assets/images/WB22/WB7.JPG","./assets/images/WB22/falls.jpg"];

const rlfa22 = ["./assets/images/RLFA22/RLFA1.jpg","./assets/images/RLFA22/RLFA2.jpg","./assets/images/RLFA22/RLFA3.jpg",
                "./assets/images/RLFA22/RLFA4.jpg","./assets/images/RLFA22/RLFA5.jpg","./assets/images/RLFA22/RLFA6.jpg",
                "./assets/images/RLFA22/RLFA7.jpg","./assets/images/RLFA22/RLFA8.jpg","./assets/images/RLFA22/RLFA9.jpg",
                "./assets/images/RLFA22/RLFA10.jpg","./assets/images/RLFA22/RLFA11.jpg","./assets/images/RLFA22/RLFA12.jpg",
                "./assets/images/RLFA22/RLFA13.jpg","./assets/images/RLFA22/RLFA14.jpg","./assets/images/RLFA22/RLFA15.jpg",
                "./assets/images/RLFA22/RLFA16.jpg","./assets/images/RLFA22/RLFA17.jpg","./assets/images/RLFA22/RLFA18.jpg",
                "./assets/images/RLFA22/RLFA19.jpg","./assets/images/RLFA22/RLFA20.jpg","./assets/images/RLFA22/RLFA21.jpg"];

const sff22 = ["./assets/images/SFF22/scouting-for-food.jpeg"];

const fwlm22 = ["./assets/images/F&WM22/F&WM1.JPG","./assets/images/F&WM22/F&WM2.JPG","./assets/images/F&WM22/F&WM3.JPG",
                "./assets/images/F&WM22/F&WM4.jpg","./assets/images/F&WM22/F&WM5.jpg","./assets/images/F&WM22/F&WM6.jpg",
                "./assets/images/F&WM22/F&WM7.jpg","./assets/images/F&WM22/F&WM8.jpg","./assets/images/F&WM22/F&WM9.jpg",
                "./assets/images/F&WM22/F&WM10.jpg","./assets/images/F&WM22/F&WM11.jpg","./assets/images/F&WM22/F&WM12.jpg",
                "./assets/images/F&WM22/F&WM13.jpg"];

const cme22 = ["./assets/images/CME22/CME1.JPG","./assets/images/CME22/CME3.JPG","./assets/images/CME22/CME4.JPG",
               "./assets/images/CME22/CME5.JPG","./assets/images/CME22/CME6.JPG","./assets/images/CME22/CME7.JPG",
               "./assets/images/CME22/CME9.JPG","./assets/images/CME22/CME13.JPG","./assets/images/CME22/CME14.JPG"];

const md22 = ["./assets/images/MD22/flags1.JPG","./assets/images/MD22/flags2.JPG","./assets/images/MD22/conservation1.JPG",
              "./assets/images/MD22/conservation2.JPG","./assets/images/MD22/parade.JPG"];

const summerCamp22 = ["./assets/images/Summer_Camp22/summer3.JPG","./assets/images/Summer_Camp22/summer4.jpg","./assets/images/Summer_Camp22/summer5.jpg",
                      "./assets/images/Summer_Camp22/summer6.jpg","./assets/images/Summer_Camp22/summer7.jpg","./assets/images/Summer_Camp22/summer8.jpg",
                      "./assets/images/Summer_Camp22/summer10.jpg","./assets/images/Summer_Camp22/summer1.JPG","./assets/images/Summer_Camp22/summer2.JPG",
                      "./assets/images/Summer_Camp22/summer9.JPG","./assets/images/Summer_Camp22/summer11.jpg","./assets/images/Summer_Camp22/summer12.jpg",
                      "./assets/images/Summer_Camp22/summer13.jpg","./assets/images/Summer_Camp22/summer14.jpg","./assets/images/Summer_Camp22/summer15.jpg",
                      "./assets/images/Summer_Camp22/summer15.jpg","./assets/images/Summer_Camp22/summer16.jpg","./assets/images/Summer_Camp22/summer17.jpg",
                      "./assets/images/Summer_Camp22/summer35.JPEG","./assets/images/Summer_Camp22/summer18.JPG","./assets/images/Summer_Camp22/summer19.JPEG",
                      "./assets/images/Summer_Camp22/summer20.JPG","./assets/images/Summer_Camp22/summer21.jpg","./assets/images/Summer_Camp22/summer22.jpg",
                      "./assets/images/Summer_Camp22/summer23.jpg","./assets/images/Summer_Camp22/summer24.jpg","./assets/images/Summer_Camp22/summer25.jpg",
                      "./assets/images/Summer_Camp22/summer26.jpg","./assets/images/Summer_Camp22/summer27.jpg","./assets/images/Summer_Camp22/summer28.jpg",
                      "./assets/images/Summer_Camp22/summer29.jpg","./assets/images/Summer_Camp22/summer30.jpg","./assets/images/Summer_Camp22/summer31.jpg",
                      "./assets/images/Summer_Camp22/summer32.jpg","./assets/images/Summer_Camp22/summer33.jpg","./assets/images/Summer_Camp22/summer34.jpg",
                      "./assets/images/Summer_Camp22/summer40.JPG","./assets/images/Summer_Camp22/summer41.JPG","./assets/images/Summer_Camp22/summer42.JPG",
                      "./assets/images/Summer_Camp22/summer43.JPG","./assets/images/Summer_Camp22/summer44.JPG","./assets/images/Summer_Camp22/summer45.JPG",
                      "./assets/images/Summer_Camp22/summer47.JPG","./assets/images/Summer_Camp22/summer48.JPG","./assets/images/Summer_Camp22/summer49.JPG",
                      "./assets/images/Summer_Camp22/summer50.JPG","./assets/images/Summer_Camp22/summer51.JPG","./assets/images/Summer_Camp22/summer52.JPG",
                      "./assets/images/Summer_Camp22/summer53.JPG","./assets/images/Summer_Camp22/summer54.JPG","./assets/images/Summer_Camp22/summer55.JPG",
                      "./assets/images/Summer_Camp22/summer56.JPG","./assets/images/Summer_Camp22/summer57.JPG","./assets/images/Summer_Camp22/summer46.JPG",
                      "./assets/images/Summer_Camp22/summer36.jpg","./assets/images/Summer_Camp22/summer37.jpg","./assets/images/Summer_Camp22/summer38.jpg",
                      "./assets/images/Summer_Camp22/summer39.JPG"];

const PS22 = ["./assets/images/PS22/PS1.JPG","./assets/images/PS22/PS2.JPG","./assets/images/PS22/PS3.JPG",
              "./assets/images/PS22/PS4.JPG","./assets/images/PS22/PS5.JPG","./assets/images/PS22/PS6.JPG",
              "./assets/images/PS22/PS7.JPG","./assets/images/PS22/PS8.JPG","./assets/images/PS22/PS9.JPG",
              "./assets/images/PS22/PS10.JPG","./assets/images/PS22/PS11.JPG","./assets/images/PS22/PS12.JPG",
              "./assets/images/PS22/PS13.JPG","./assets/images/PS22/PS14.JPG","./assets/images/PS22/PS15.JPG",
              "./assets/images/PS22/PS16.JPG","./assets/images/PS22/PS17.JPG","./assets/images/PS22/PS18.JPG",
              "./assets/images/PS22/PS19.JPG","./assets/images/PS22/PS20.JPG"];

const Fish22 = ["./assets/images/Fish22/Fish1.JPG","./assets/images/Fish22/Fish2.JPG","./assets/images/Fish22/Fish3.JPG",
                "./assets/images/Fish22/Fish4.JPG","./assets/images/Fish22/Fish5.JPG","./assets/images/Fish22/Fish6.JPG",
                "./assets/images/Fish22/Fish7.JPG","./assets/images/Fish22/Fish8.JPG","./assets/images/Fish22/Fish9.JPG",
                "./assets/images/Fish22/Fish10.JPG","./assets/images/Fish22/Fish11.JPG","./assets/images/Fish22/Fish12.JPG",
                "./assets/images/Fish22/Fish13.JPG","./assets/images/Fish22/Fish14.JPG","./assets/images/Fish22/Fish15.JPG",
                "./assets/images/Fish22/Fish16.JPG","./assets/images/Fish22/Fish17.JPG","./assets/images/Fish22/Fish18.JPG",
                "./assets/images/Fish22/Fish19.JPG","./assets/images/Fish22/Fish20.JPG","./assets/images/Fish22/Fish21.JPG",
                "./assets/images/Fish22/Fish22.JPG","./assets/images/Fish22/Fish23.JPG","./assets/images/Fish22/Fish24.JPG",
                "./assets/images/Fish22/Fish25.JPG","./assets/images/Fish22/Fish26.JPG","./assets/images/Fish22/Fish27.JPG",
                "./assets/images/Fish22/Fish28.JPG","./assets/images/Fish22/Fish29.JPG","./assets/images/Fish22/Fish30.JPG",
                "./assets/images/Fish22/Fish31.JPG","./assets/images/Fish22/Fish32.JPG","./assets/images/Fish22/Fish33.JPG"];

const Mum22 = ["./assets/images/Mum22/Mum1.png","./assets/images/Mum22/Mum2.png","./assets/images/Mum22/Mum3.png",
               "./assets/images/Mum22/Mum4.png","./assets/images/Mum22/Mum5.png","./assets/images/Mum22/Mum6.png",
               "./assets/images/Mum22/Mum7.png","./assets/images/Mum22/Mum8.png","./assets/images/Mum22/Mum9.jpg",
               "./assets/images/Mum22/Mum10.jpg","./assets/images/Mum22/Mum11.jpg","./assets/images/Mum22/Mum12.JPG",
               "./assets/images/Mum22/Mum13.JPG","./assets/images/Mum22/Mum14.JPG"];

const SP22 = ["./assets/images/SP22/SP1.jpg","./assets/images/SP22/SP2.jpg","./assets/images/SP22/SP3.jpg",
              "./assets/images/SP22/SP4.jpg","./assets/images/SP22/SP5.jpg","./assets/images/SP22/SP6.jpg",
              "./assets/images/SP22/SP7.jpg","./assets/images/SP22/SP8.jpg"];

const TB22 = ["./assets/images/TB22/TB1.jpg","./assets/images/TB22/TB2.jpg","./assets/images/TB22/TB3.jpg",
              "./assets/images/TB22/TB4.jpg","./assets/images/TB22/TB5.jpg","./assets/images/TB22/TB6.jpg",
              "./assets/images/TB22/TB7.jpg","./assets/images/TB22/TB8.jpg","./assets/images/TB22/TB9.jpg",
              "./assets/images/TB22/TB10.jpg","./assets/images/TB22/TB11.JPG","./assets/images/TB22/TB12.JPG",
              "./assets/images/TB22/TB13.JPG"];

const AP22 = ["./assets/images/AP22/AP1.JPG","./assets/images/AP22/AP2.JPG","./assets/images/AP22/AP3.JPG",
              "./assets/images/AP22/AP4.jpg","./assets/images/AP22/AP5.jpg","./assets/images/AP22/AP6.jpg",
              "./assets/images/AP22/AP7.jpg","./assets/images/AP22/AP8.jpg","./assets/images/AP22/AP9.jpg",
              "./assets/images/AP22/AP10.jpg","./assets/images/AP22/AP11.jpg","./assets/images/AP22/AP12.jpg",
              "./assets/images/AP22/AP13.jpg","./assets/images/AP22/AP14.jpg","./assets/images/AP22/AP15.jpg",
              "./assets/images/AP22/AP16.jpg","./assets/images/AP22/AP17.jpg","./assets/images/AP22/AP18.jpg",
              "./assets/images/AP22/AP19.jpg","./assets/images/AP22/AP20.jpg","./assets/images/AP22/AP21.jpg",
              "./assets/images/AP22/AP22.jpg"];

const co39522 = ["./assets/images/395crossover22/395crossover1.jpg","./assets/images/395crossover22/395crossover2.jpg","./assets/images/395crossover22/395crossover3.jpg"];

const shelf22 = ["./assets/images/shelf-project22/shelf1.JPG","./assets/images/shelf-project22/shelf2.JPG",
                 "./assets/images/shelf-project22/shelf3.JPG","./assets/images/shelf-project22/shelf4.JPG"];

const food22 = ["./assets/images/food-pantry22/food1.JPG","./assets/images/food-pantry22/food2.JPG","./assets/images/food-pantry22/food3.JPG",
                "./assets/images/food-pantry22/food4.JPG","./assets/images/food-pantry22/food5.JPG","./assets/images/food-pantry22/food6.JPG",
                "./assets/images/food-pantry22/food7.JPG"];

const CO28523 = ["./assets/images/285crossover23/crossover1.jpg","./assets/images/285crossover23/crossover2.jpg","./assets/images/285crossover23/crossover3.jpg",
                 "./assets/images/285crossover23/crossover4.jpg","./assets/images/285crossover23/crossover5.jpg","./assets/images/285crossover23/crossover6.jpg",
                 "./assets/images/285crossover23/crossover7.jpg","./assets/images/285crossover23/crossover8.jpg","./assets/images/285crossover23/crossover9.jpg",
                 "./assets/images/285crossover23/crossover10.jpg","./assets/images/285crossover23/crossover11.jpg","./assets/images/285crossover23/crossover12.jpg",
                 "./assets/images/285crossover23/crossover13.jpg","./assets/images/285crossover23/crossover14.jpg","./assets/images/285crossover23/crossover15.jpg",
                 "./assets/images/285crossover23/crossover16.jpg","./assets/images/285crossover23/crossover17.jpg","./assets/images/285crossover23/crossover18.jpg",
                 "./assets/images/285crossover23/crossover19.jpg","./assets/images/285crossover23/crossover20.jpg","./assets/images/285crossover23/crossover21.jpg",
                 "./assets/images/285crossover23/crossover22.jpg"];

const SS23 = ["./assets/images/scout-sunday23/sunday1.jpg","./assets/images/scout-sunday23/sunday2.jpg","./assets/images/scout-sunday23/sunday3.jpg",
              "./assets/images/scout-sunday23/sunday4.jpg","./assets/images/scout-sunday23/sunday5.jpg","./assets/images/scout-sunday23/sunday6.jpg",
              "./assets/images/scout-sunday23/sunday7.jpg","./assets/images/scout-sunday23/sunday8.jpg","./assets/images/scout-sunday23/sunday9.jpg",
              "./assets/images/scout-sunday23/sunday10.jpg","./assets/images/scout-sunday23/sunday11.jpg","./assets/images/scout-sunday23/sunday12.jpg",];

const MC23 = ["./assets/images/Caving23/cave1.jpeg","./assets/images/Caving23/cave2.jpeg","./assets/images/Caving23/cave3.jpg",
              "./assets/images/Caving23/cave4.jpg","./assets/images/Caving23/cave5.jpg","./assets/images/Caving23/cave6.jpg",
              "./assets/images/Caving23/cave7.jpg","./assets/images/Caving23/cave8.jpg","./assets/images/Caving23/cave9.jpg",
              "./assets/images/Caving23/cave10.jpg","./assets/images/Caving23/cave11.jpg","./assets/images/Caving23/cave12.jpg",
              "./assets/images/Caving23/cave13.jpg","./assets/images/Caving23/cave14.jpg","./assets/images/Caving23/cave15.jpg",
              "./assets/images/Caving23/cave16.jpg","./assets/images/Caving23/cave17.jpg","./assets/images/Caving23/cave18.jpg",
              "./assets/images/Caving23/cave19.jpg","./assets/images/Caving23/cave20.jpg","./assets/images/Caving23/cave21.jpg",
              "./assets/images/Caving23/cave22.jpg","./assets/images/Caving23/cave23.jpg","./assets/images/Caving23/cave24.jpg",
              "./assets/images/Caving23/cave25.jpg","./assets/images/Caving23/cave26.jpg","./assets/images/Caving23/cave27.jpg",
              "./assets/images/Caving23/cave28.jpg","./assets/images/Caving23/cave29.jpg","./assets/images/Caving23/cave30.jpg",
              "./assets/images/Caving23/cave31.jpg","./assets/images/Caving23/cave32.jpg","./assets/images/Caving23/cave33.jpg",
              "./assets/images/Caving23/cave34.jpg","./assets/images/Caving23/cave35.jpg","./assets/images/Caving23/cave36.jpg",
              "./assets/images/Caving23/cave37.jpg","./assets/images/Caving23/cave38.jpg","./assets/images/Caving23/cave39.jpg",
              "./assets/images/Caving23/cave40.jpg","./assets/images/Caving23/cave41.jpg","./assets/images/Caving23/cave42.jpg",
              "./assets/images/Caving23/cave43.jpg","./assets/images/Caving23/cave44.jpg","./assets/images/Caving23/cave45.jpg",
              "./assets/images/Caving23/cave46.jpg","./assets/images/Caving23/cave47.jpg","./assets/images/Caving23/cave48.jpg",
              "./assets/images/Caving23/cave49.jpg","./assets/images/Caving23/cave50.jpg","./assets/images/Caving23/cave51.jpg",
              "./assets/images/Caving23/cave52.jpg","./assets/images/Caving23/cave53.jpg","./assets/images/Caving23/cave54.jpg",
              "./assets/images/Caving23/cave55.jpg","./assets/images/Caving23/cave56.jpg","./assets/images/Caving23/cave57.jpg",
              "./assets/images/Caving23/cave58.jpg","./assets/images/Caving23/cave59.jpg","./assets/images/Caving23/cave60.jpg",
              "./assets/images/Caving23/cave61.jpg","./assets/images/Caving23/cave62.jpg","./assets/images/Caving23/cave63.jpg",
              "./assets/images/Caving23/cave64.jpg","./assets/images/Caving23/cave65.jpg","./assets/images/Caving23/cave66.jpg",
              "./assets/images/Caving23/cave67.jpg","./assets/images/Caving23/cave68.jpg","./assets/images/Caving23/cave69.jpg",
              "./assets/images/Caving23/cave70.jpg","./assets/images/Caving23/cave71.jpg","./assets/images/Caving23/cave72.jpg",
              "./assets/images/Caving23/cave73.jpg","./assets/images/Caving23/cave74.jpg","./assets/images/Caving23/cave75.jpg",
              "./assets/images/Caving23/cave76.jpg","./assets/images/Caving23/cave77.jpg","./assets/images/Caving23/cave78.jpg",
              "./assets/images/Caving23/cave79.jpg","./assets/images/Caving23/cave80.jpg","./assets/images/Caving23/cave81.jpg",
              "./assets/images/Caving23/cave82.jpg","./assets/images/Caving23/cave83.jpg","./assets/images/Caving23/cave84.jpg",
              "./assets/images/Caving23/cave85.jpg","./assets/images/Caving23/cave86.jpg","./assets/images/Caving23/cave87.jpg",
              "./assets/images/Caving23/cave88.jpg","./assets/images/Caving23/cave89.jpg","./assets/images/Caving23/cave90.jpg",
              "./assets/images/Caving23/cave91.jpg","./assets/images/Caving23/cave92.jpg","./assets/images/Caving23/cave93.jpg",
              "./assets/images/Caving23/cave94.jpg","./assets/images/Caving23/cave95.jpg","./assets/images/Caving23/cave96.jpg",
              "./assets/images/Caving23/cave97.jpg","./assets/images/Caving23/cave98.jpg","./assets/images/Caving23/cave99.jpg",
              "./assets/images/Caving23/cave100.jpg","./assets/images/Caving23/cave101.jpg","./assets/images/Caving23/cave102.jpg",
              "./assets/images/Caving23/cave103.jpg","./assets/images/Caving23/cave104.jpg","./assets/images/Caving23/cave105.jpg",
              "./assets/images/Caving23/cave106.jpg","./assets/images/Caving23/cave107.jpg","./assets/images/Caving23/cave108.jpg",
              "./assets/images/Caving23/cave109.jpg",];

const SFF23 = ["./assets/images/SFF23/sff1.jpg","./assets/images/SFF23/sff2.jpg","./assets/images/SFF23/sff3.jpg",
               "./assets/images/SFF23/sff4.jpg","./assets/images/SFF23/sff5.jpg","./assets/images/SFF23/sff6.jpg",
               "./assets/images/SFF23/sff7.jpg","./assets/images/SFF23/sff8.jpg","./assets/images/SFF23/sff9.jpg",
               "./assets/images/SFF23/sff10.jpg","./assets/images/SFF23/sff11.jpg","./assets/images/SFF23/sff12.jpg",
               "./assets/images/SFF23/sff13.jpg","./assets/images/SFF23/sff14.jpg","./assets/images/SFF23/sff15.jpg",
               "./assets/images/SFF23/sff16.jpg","./assets/images/SFF23/sff17.jpg","./assets/images/SFF23/sff18.jpg",
               "./assets/images/SFF23/sff19.jpg","./assets/images/SFF23/sff20.jpg","./assets/images/SFF23/sff21.jpg",
               "./assets/images/SFF23/sff22.jpg","./assets/images/SFF23/sff23.jpg","./assets/images/SFF23/sff24.jpg",
               "./assets/images/SFF23/sff25.jpg"];

const BP23 = ["./assets/images/BP23/back1.jpg","./assets/images/BP23/back2.jpg","./assets/images/BP23/back3.jpg",
              "./assets/images/BP23/back4.jpg","./assets/images/BP23/back5.jpg","./assets/images/BP23/back6.jpg",
              "./assets/images/BP23/back7.jpg","./assets/images/BP23/back8.jpg","./assets/images/BP23/back9.jpg",
              "./assets/images/BP23/back10.jpg","./assets/images/BP23/back11.jpg","./assets/images/BP23/back12.jpg",
              "./assets/images/BP23/back13.jpg","./assets/images/BP23/back14.jpg","./assets/images/BP23/back15.jpg",
              "./assets/images/BP23/back16.jpg","./assets/images/BP23/back17.jpg","./assets/images/BP23/back18.jpg",
              "./assets/images/BP23/back19.jpg","./assets/images/BP23/back20.jpg","./assets/images/BP23/back21.jpg",
              "./assets/images/BP23/back22.jpg","./assets/images/BP23/back23.jpg","./assets/images/BP23/back24.jpg",
              "./assets/images/BP23/back25.jpg","./assets/images/BP23/back26.jpg","./assets/images/BP23/back27.jpg",
              "./assets/images/BP23/back28.jpg","./assets/images/BP23/back29.jpg","./assets/images/BP23/back30.jpg",
              "./assets/images/BP23/back31.jpg","./assets/images/BP23/back32.jpg","./assets/images/BP23/back33.jpg",
              "./assets/images/BP23/back34.jpg","./assets/images/BP23/back35.jpg","./assets/images/BP23/back36.jpg",
              "./assets/images/BP23/back37.jpg","./assets/images/BP23/back38.jpg","./assets/images/BP23/back39.jpg",
              "./assets/images/BP23/back40.jpg","./assets/images/BP23/back41.jpg","./assets/images/BP23/back42.jpg",
              "./assets/images/BP23/back43.jpg","./assets/images/BP23/back44.jpg","./assets/images/BP23/back45.jpg",
              "./assets/images/BP23/back46.jpg","./assets/images/BP23/back47.jpg","./assets/images/BP23/back48.jpg",
              "./assets/images/BP23/back49.jpg","./assets/images/BP23/back50.jpg","./assets/images/BP23/back51.jpg",
              "./assets/images/BP23/back52.jpg","./assets/images/BP23/back53.jpg","./assets/images/BP23/back54.jpg",
              "./assets/images/BP23/back55.jpg","./assets/images/BP23/back56.jpg","./assets/images/BP23/back57.jpg",
              "./assets/images/BP23/back58.jpg","./assets/images/BP23/back59.jpg","./assets/images/BP23/back60.PNG",
              "./assets/images/BP23/back61.jpg","./assets/images/BP23/back62.jpg","./assets/images/BP23/back63.jpg",
              "./assets/images/BP23/back64.jpg","./assets/images/BP23/back65.PNG"];

const WS23 = ["./assets/images/WS23/WS1.jpg","./assets/images/WS23/WS2.jpg","./assets/images/WS23/WS3.jpg",
        "./assets/images/WS23/WS4.jpg","./assets/images/WS23/WS5.jpg","./assets/images/WS23/WS6.jpg",
        "./assets/images/WS23/WS7.jpg","./assets/images/WS23/WS8.jpg","./assets/images/WS23/WS9.jpg",
        "./assets/images/WS23/WS10.jpg","./assets/images/WS23/WS11.jpg","./assets/images/WS23/WS12.jpg",
        "./assets/images/WS23/WS13.jpg","./assets/images/WS23/WS14.jpg","./assets/images/WS23/WS15.jpg",
        "./assets/images/WS23/WS16.jpg","./assets/images/WS23/WS17.jpg","./assets/images/WS23/WS18.jpg",
        "./assets/images/WS23/WS19.jpg","./assets/images/WS23/WS20.jpg","./assets/images/WS23/WS21.jpg",
        "./assets/images/WS23/WS22.jpg","./assets/images/WS23/WS23.jpg"];

const MD23 = ["./assets/images/MD23/MD1.jpg","./assets/images/MD23/MD2.jpg","./assets/images/MD23/MD3.jpg",
        "./assets/images/MD23/MD4.jpg","./assets/images/MD23/MD5.jpg","./assets/images/MD23/MD6.jpg",
        "./assets/images/MD23/MD7.jpg","./assets/images/MD23/MD8.jpg","./assets/images/MD23/MD9.jpg",
        "./assets/images/MD23/MD10.jpg","./assets/images/MD23/MD11.jpg","./assets/images/MD23/MD12.jpg",
        "./assets/images/MD23/MD13.jpg","./assets/images/MD23/MD14.jpg","./assets/images/MD23/MD15.jpg",
        "./assets/images/MD23/MD16.jpg","./assets/images/MD23/MD17.jpg","./assets/images/MD23/MD18.jpg",
        "./assets/images/MD23/MD19.jpg","./assets/images/MD23/MD20.jpg"];

const SCD0 = ["./assets/images/Summer_Camp23/Day0/Day0_1.jpg","./assets/images/Summer_Camp23/Day0/Day0_2.jpg","./assets/images/Summer_Camp23/Day0/Day0_3.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_4.jpg","./assets/images/Summer_Camp23/Day0/Day0_5.jpg","./assets/images/Summer_Camp23/Day0/Day0_6.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_7.jpg","./assets/images/Summer_Camp23/Day0/Day0_8.jpg","./assets/images/Summer_Camp23/Day0/Day0_9.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_10.jpg","./assets/images/Summer_Camp23/Day0/Day0_11.jpg","./assets/images/Summer_Camp23/Day0/Day0_12.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_13.jpg","./assets/images/Summer_Camp23/Day0/Day0_14.jpg","./assets/images/Summer_Camp23/Day0/Day0_15.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_16.jpg","./assets/images/Summer_Camp23/Day0/Day0_17.jpg","./assets/images/Summer_Camp23/Day0/Day0_18.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_19.jpg","./assets/images/Summer_Camp23/Day0/Day0_20.jpg","./assets/images/Summer_Camp23/Day0/Day0_21.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_22.jpg","./assets/images/Summer_Camp23/Day0/Day0_23.jpg","./assets/images/Summer_Camp23/Day0/Day0_24.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_25.jpg","./assets/images/Summer_Camp23/Day0/Day0_26.jpg","./assets/images/Summer_Camp23/Day0/Day0_27.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_28.jpg","./assets/images/Summer_Camp23/Day0/Day0_29.jpg","./assets/images/Summer_Camp23/Day0/Day0_30.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_31.jpg","./assets/images/Summer_Camp23/Day0/Day0_32.jpg","./assets/images/Summer_Camp23/Day0/Day0_33.jpg",];

const SCD1 = ["./assets/images/Summer_Camp23/Day1/Day1_1.jpg","./assets/images/Summer_Camp23/Day1/Day1_2.jpg","./assets/images/Summer_Camp23/Day1/Day1_3.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_4.jpg","./assets/images/Summer_Camp23/Day1/Day1_5.jpg","./assets/images/Summer_Camp23/Day1/Day1_6.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_7.jpg","./assets/images/Summer_Camp23/Day1/Day1_8.jpg","./assets/images/Summer_Camp23/Day1/Day1_9.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_10.jpg","./assets/images/Summer_Camp23/Day1/Day1_11.jpg","./assets/images/Summer_Camp23/Day1/Day1_12.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_13.jpg","./assets/images/Summer_Camp23/Day1/Day1_14.jpg","./assets/images/Summer_Camp23/Day1/Day1_15.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_16.jpg","./assets/images/Summer_Camp23/Day1/Day1_17.jpg","./assets/images/Summer_Camp23/Day1/Day1_18.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_19.jpg","./assets/images/Summer_Camp23/Day1/Day1_20.jpg","./assets/images/Summer_Camp23/Day1/Day1_21.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_22.jpg","./assets/images/Summer_Camp23/Day1/Day1_23.jpg","./assets/images/Summer_Camp23/Day1/Day1_24.jpg",];

const SCD2 = ["./assets/images/Summer_Camp23/Day2/Day2_1.jpg","./assets/images/Summer_Camp23/Day2/Day2_2.jpg","./assets/images/Summer_Camp23/Day2/Day2_3.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_4.jpg","./assets/images/Summer_Camp23/Day2/Day2_5.jpg","./assets/images/Summer_Camp23/Day2/Day2_6.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_7.jpg","./assets/images/Summer_Camp23/Day2/Day2_8.jpg","./assets/images/Summer_Camp23/Day2/Day2_9.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_10.jpg","./assets/images/Summer_Camp23/Day2/Day2_11.jpg","./assets/images/Summer_Camp23/Day2/Day2_12.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_13.jpg","./assets/images/Summer_Camp23/Day2/Day2_14.jpg","./assets/images/Summer_Camp23/Day2/Day2_15.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_16.jpg","./assets/images/Summer_Camp23/Day2/Day2_17.jpg","./assets/images/Summer_Camp23/Day2/Day2_18.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_19.jpg","./assets/images/Summer_Camp23/Day2/Day2_20.jpg","./assets/images/Summer_Camp23/Day2/Day2_21.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_22.jpg","./assets/images/Summer_Camp23/Day2/Day2_23.jpg","./assets/images/Summer_Camp23/Day2/Day2_24.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_25.jpg","./assets/images/Summer_Camp23/Day2/Day2_26.jpg","./assets/images/Summer_Camp23/Day2/Day2_27.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_28.jpg","./assets/images/Summer_Camp23/Day2/Day2_29.jpg","./assets/images/Summer_Camp23/Day2/Day2_30.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_31.jpg","./assets/images/Summer_Camp23/Day2/Day2_32.jpg","./assets/images/Summer_Camp23/Day2/Day2_33.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_34.jpg","./assets/images/Summer_Camp23/Day2/Day2_35.jpg","./assets/images/Summer_Camp23/Day2/Day2_36.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_37.jpg","./assets/images/Summer_Camp23/Day2/Day2_38.jpg",];

const SCD3 = ["./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",
              "./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg","./assets/images/Summer_Camp23/Day3/Day31.jpg",];

const SCD4 = ["./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",
              "./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg","./assets/images/Summer_Camp23/Day4/Day41.jpg",];

const SCD5 = ["./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",
              "./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg","./assets/images/Summer_Camp23/Day5/Day51.jpg",];

const renderPhotos = (value) => {
  photosEl.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl.appendChild(item);
  }
};

const renderEventPhotos1 = (value) => {
  photosEl1.innerHTML = "";
  photosEl2.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl1.appendChild(item);
  }
};

const renderEventPhotos2 = (value) => {
  photosEl1.innerHTML = "";
  photosEl2.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl2.appendChild(item);
  }
};

//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add modal to the parent element 
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
      }; 
    modal.append(newImage, closeBtn);
};