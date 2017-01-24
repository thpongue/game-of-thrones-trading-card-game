/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CardSelectionComponent } from './card-selection.component';

import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

describe('CardSelectionComponent', () => {
  let component: CardSelectionComponent;
  let fixture: ComponentFixture<CardSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSelectionComponent ],
			schemas: [ NO_ERRORS_SCHEMA ], // ignore custom directives in template since we are not unit testing these
			providers: [ CardsService ] // TODO: mock this once we start doing real work with this service
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title "Card Selection"', () => {
    expect(component.title).toBe('Card Selection');
  });

	it('should hyphenate Jon Snow to Jon-Snow', () => {
		expect(component.hyphenate('Jon Snow')).toBe('Jon-Snow');
	})
});
