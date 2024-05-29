import { Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NoteResolver } from './resolvers/note.resolver';
import { NotesArchiveResolver } from './resolvers/notes-archive.resolver';
import { NotesResolver } from './resolvers/notes.resolver';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: { notes: NotesResolver },
  },
  {
    path: 'archiwum/:year/:month',
    component: MainPageComponent,
    resolve: { notes: NotesArchiveResolver },
  },
  {
    path: ':id',
    component: ArticleComponent,
    resolve: { note: NoteResolver },
  },
];
