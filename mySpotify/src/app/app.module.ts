import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthorizationComponent } from './user-authorization/user-authorization.component';
import { MonSpotifyService } from './mon-spotify.service';
import { PlayListComponent } from './play-list/play-list.component';
import { ListPlaylistService } from './listplaylist.service';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthorizationComponent,
    PlayListComponent,
    PlaylistTracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [MonSpotifyService,ListPlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
