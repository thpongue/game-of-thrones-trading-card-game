/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardDetailComponent } from './card-detail.component';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

describe('CardDetailComponent', () => {
  let component: CardDetailComponent;
  let fixture: ComponentFixture<CardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailComponent ],
			providers: [
			{ provide: ActivatedRoute, useValue: { 'card-detail': Observable.from([{ 'Id': 1 }]) } },
			CardsService // TODO: mock this once we start doing real work with this service
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title "Card Detail"', () => {
    expect(component.title).toBe('Card Detail');
  });
});
