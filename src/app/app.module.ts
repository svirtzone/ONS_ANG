import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { AppRoutingModule } from './app-routing';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { ToDoComponent } from './ToDo/Components/to-do.component';
import { ToDoEffects } from './ToDo/todo.effects';
import { ToDoReducer } from './ToDo/todo.reducer';
import { LayoutComponent } from './ToDo/Components/_layout/layout/layout.component';
import { HeaderComponent } from './ToDo/Components/_layout/header/header.component';
import { SidebarComponent } from './ToDo/Components/_layout/sidebar/sidebar.component';
import { FooterComponent } from './ToDo/Components/_layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, ToDoComponent,LayoutComponent,HeaderComponent,SidebarComponent,FooterComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: ToDoReducer }),
    EffectsModule.forRoot([ToDoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
