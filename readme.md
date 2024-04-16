# Piral Blazor Mud Render Error MWE

## App Shell
Created From Sample in [Piral.Blazor](https://github.com/smapiot/Piral.Blazor/tree/blazor-8.0/example/app-shell) 


## Pilet 
### Running Pilet
* run either 
  * run.ps1
  * run.sh
  
### Error Case

1. Click on link at top of page `Error Sample` 
2. Open a menu
   * should work here
3. Click on link to `single menu`
4. Open thge menu
   * May or may not work here most likely it will
5. click on link to `many menu`
   * expected behavior: clicking on any of the menus should allow it to open and then clicking on another should open the new one
   * Actual behavior: click on first one it may or may not open and if it does open it will not close and opening another will most likely not happen.