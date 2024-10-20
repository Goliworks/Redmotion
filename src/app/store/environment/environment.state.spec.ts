import { TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngxs/store';
import { EnvironmentState } from './environment.state';

describe('Environment store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([EnvironmentState])],
    });

    store = TestBed.inject(Store);
  });
});
