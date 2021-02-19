import { React } from "react";
import  UpComingOR from "./UpComingOR";
import ContinueWatching from "./ContinueWatching";
import Slider from "./Slider";
import MovieGenres from "./MovieGenres";
import MovieLanguages from "./MovieLanguages";
import VideoGeners from "./VideoGeners";
import KidsGenres from "./KidsGenres";
import MusicGenres from "./MusicGenres";
import Ads from "./Ads";
function Home() {
  // var myArray = [
  //    {
  //     title : 'Trending',
  //    }
  // ];

  // var myArray = {
  //   title : 'Trending One',
  //   path : 'Trending Path'
  // };
  return (
    <div>
      <div>
      <UpComingOR />    
      <ContinueWatching />      
        
      <Slider data={{title:'Trending'}} />     
        
      <MovieGenres />     

      <Ads/>

      <Slider data={{title:'Popular Bollywood Movies'}} />     


      <Slider data={{title:'Popular Hollywood Movies'}} />    

      <Slider data={{title:'Upcoming Movies'}} />    

      <Slider data={{title:'Popular Hindi Dubbed Movies'}} />    


      <Slider data={{title:'Popular Regional Movies'}} />     

        
      <Ads/>
        

      <MovieLanguages/>

      <Slider data={{title:'Popular Original Series'}} />      

        
      <Slider data={{title:'Popular English Web Series'}} />  
        

        
      <Slider data={{title:'Popular English Web Series'}} />  
        

        
      <VideoGeners/>
        

      <Ads/>

      <Slider data={{title:'Popular Hindi Web Series'}} />    


      <Slider data={{title:'Popular Regional Web Series'}} />    

        
      <Slider data={{title:'Popular Short Films'}} />  
        

        
      <KidsGenres />
        

      <Ads/>  

      <Slider data={{title:'Kids & Family Movies'}} />   

       <Slider data={{title:'Kids & Family Videos'}} />    

        

       <Slider data={{title:'Explore TV Shows'}} />   

       <Ads/>   

       <Slider data={{title:'Popular TV Shows'}} />    

       <Slider data={{title:'Latest News'}} />    

       <Slider data={{title:'Bollywood Classics'}} />    

        
       <Slider data={{title:'Hollywood Classics'}} />   
        
       <Ads/>   
        

      <MusicGenres />  

      <Slider data={{title:'Top Hindi Songs'}} /> 


      <Slider data={{title:'Top English Songs'}} />  



      <Slider data={{title:'Hindi Classic Songs'}} />   



      <Slider data={{title:'English Classic Songs'}} />   

        

      

        
      </div>
    </div>
  );
}

export default Home;
