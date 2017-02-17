#pragma once

#include "pebble.h"



static const GPathInfo MINUTE_HAND_POINTS = {
	5,
  (GPoint []) {
    { -2, 0 },
    { -7, -78 },
    { 0, -86 },
    { 7, -78 },
	{ 2, 0 }
  }
};

static const GPathInfo HOUR_HAND_POINTS = {
5,
  (GPoint []) {
    { -2, 0 },
    { -6, -42 },
	{ 0, -48 },
	{ 6, -42 },
	{ 2, 0 }
  }
};

