package com.efficitynative;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import com.reactnativenavigation.NavigationApplication;

public class MainApplication extends NavigationApplication { //implements ReactApplication

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  //private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    /*@Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }*/

    //@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFirebasePackage(),
            new RNFirebaseAuthPackage(),
            new FBSDKPackage(mCallbackManager),
            new RNFirebaseDatabasePackage()
      );
    }

    @Override
    public String getJSMainModuleName() {
      return "index";
    }
  //};

  /*@Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }*/

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
