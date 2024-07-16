import { Component, Injector, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  counter = signal(0);
  username = signal('');
  users = signal([
    "ABC",
    "Tutorial"
  ]);

  videos = signal({
    title: "Youtube Signal Videos",
    descrition:"Awesome Angular Signal Tutorial"
  })

  setCounter(){
    this.counter.set(20);
    this.counterEffect()
  }
  updateCounter(){
    this.counter.update(counter => counter + 30)
  }
  setVideos(){
    this.videos.set({
      "title":"New Title",
      "descrition":"New Descriptions"
    })
  }

  constructor(private injector:Injector){
   
  }

  counterEffect():void{
    effect(()=>{
      console.log("the Counter value is", this.counter());
      console.log("the Counter value is", this.videos().descrition);
    },{injector:this.injector})
  }
}
