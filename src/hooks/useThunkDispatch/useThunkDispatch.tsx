import React from 'react';
import store from '../../store';
import { useDispatch } from 'react-redux';

export default () => useDispatch<typeof store.dispatch>();
