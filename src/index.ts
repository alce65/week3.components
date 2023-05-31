import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { Menu } from './components/menu';
import { TasksList } from './components/tasks.list';
import type { MenuOptions } from './types/menu.options';

const menuOptions: MenuOptions = [
  { url: 'index.html', label: 'Home' },
  { url: 'about.html', label: 'Nosotros' },
];

new Header('#app', 'Learning TypeScript - Day2');
new Menu('header', menuOptions);
new Main('#app');
new TasksList('main');
new Footer('#app', 'ISDI - Coders');
