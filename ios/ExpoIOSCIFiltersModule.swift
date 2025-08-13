import ExpoModulesCore

public class ExpoIOSCIFiltersModule: Module {

  public func definition() -> ModuleDefinition {
    
    Name("ExpoIOSCIFilters")

    View(ExpoCIFilterView.self)
  }
}
