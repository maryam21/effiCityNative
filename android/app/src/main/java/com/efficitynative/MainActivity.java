package com.efficitynative;

import com.facebook.react.ReactActivity;

import com.reactnativenavigation.controllers.SplashActivity;

import android.content.Intent;

public class MainActivity extends SplashActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    //@Override
    protected String getMainComponentName() {
        return "effiCityNative";
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
}
