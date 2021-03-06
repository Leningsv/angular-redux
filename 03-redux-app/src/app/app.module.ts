import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoModule} from './todos/todo.module';
import {FooterComponent} from './footer/footer.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_REDUCERS} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(APP_REDUCERS, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
