import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as GIF from 'gif.js';

@Component({
  selector: 'app-gift-generator',
  templateUrl: './gift-generator.component.html',
  styleUrls: ['./gift-generator.component.scss'],
})
export class GiftGeneratorComponent {
  backgroundColor: string = '#ffffff';
  gifPreviewVisible: boolean = false;
  number = new FormControl(0);

  generarGif() {
    if(this.number.value === 0) {
      window.alert('Debe ingresar un valor mayor que 0')
      return;
    }
    const selectedBackground = this.backgroundColor;
    const selectedNumber = this.number.value ?? 0;

    const gifWidth = 200;
    const gifHeight = 150; 

    const gif = new GIF({
      width: gifWidth,
      height: gifHeight,
      quality: 10, 
      workerScript: 'assets/gif.worker.js', 
    });

    gif.on('finished', (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });

    for (let i = 0; i <= selectedNumber; i++) {
      const canvas = document.createElement('canvas');
      canvas.width = gifWidth;
      canvas.height = gifHeight;
      const ctx = canvas.getContext('2d');
      
      ctx!.fillStyle = selectedBackground || '#ffffff';
      ctx!.fillRect(0, 0, gifWidth, gifHeight);
      
  
      ctx!.fillStyle = '#000000'; 
      ctx!.font = '48px Arial'; 
      ctx!.textAlign = 'center'; 
      ctx!.textBaseline = 'middle'; 
      ctx!.fillText(i.toString(), gifWidth / 2, gifHeight / 2);
      
      gif.addFrame(canvas, { delay: 700 });
    }

    gif.render();
  }
}
