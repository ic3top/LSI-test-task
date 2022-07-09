import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Theme } from '../../models/theme.models';
import { THEMES } from './constants';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  themes = THEMES;
  selectedTheme = Theme.light;

  constructor(private themeService: ThemeService) {}

  onThemeChange(theme: Theme) {
    this.themeService.switchTheme(theme);
  }
}
