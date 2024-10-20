import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeZoom } from './environment.actions';

export interface EnvironmentStateModel {
  zoom: number;
}

@State<EnvironmentStateModel>({
  name: 'environment',
  defaults: {
    zoom: 1,
  },
})
@Injectable()
export class EnvironmentState {
  @Selector()
  static getZoom(state: EnvironmentStateModel): number {
    return state.zoom;
  }

  @Action(ChangeZoom)
  changeZoom(ctx: StateContext<EnvironmentStateModel>, { zoom }: ChangeZoom) {
    ctx.patchState({ zoom });
  }
}
