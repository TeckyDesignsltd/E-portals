The panels component allows for portal-style portlets 
with localStorage based state persistence.

### Layout

Markup with common configuration:

    <div class="row" rel="panels">
      <div class="col-md-6 panels" id="UNIQUE_ID">

        <div class="panel panel-default" id="UNIQUE_ID" DATA_ATTRIBUTES>
          <div class="panel-heading panel-handle panel-colorize">
            <div class="panel-actions pull-right">
              
              <!-- Refresh the content, if panel has data-url attribute -->
              <span class="panel-action panel-refresh">
                <i class="fa fa-refresh animated"></i>
              </span>

              <!-- Can change the panel class -->
              <span class="panel-action panel-classify">
                <select rel="classselector">
                  <option>panel-default</option>
                  <option>panel-primary</option>
                  <option>panel-info</option>
                  ...
                </select>
              </span>

              <!-- Can colorize portions of the panel that have the class .panel-colorize -->
              <span class="panel-action panel-color">
                <select rel="colorselector">
                  <option value="1" data-color="#555555" selected="selected">gray</option>
                  <option value="2" data-color="#CD5C5C">indianred</option>
                  ...
                </select>
              </span>

              <!-- Toggle fullscreen -->
              <span class="panel-action panel-fullscreen">
                <i class="fa fa-expand"></i>
              </span>
              
              <!-- Toggle collapse -->
              <span class="panel-action panel-collapse">
                <i class="fa fa-minus"></i>
              </span>
              
              <!-- Close the panel. State persisted in localStorage -->
              <span class="panel-action panel-close">
                <i class="fa fa-times"></i>
              </span>
            </div>
            <div class="panel-title">
              <span class="panel-title-edtitable" data-type="text">Panel</span>
            </div>
          </div>
          <div class="panel-body-collapse collapse in">
            <div class="panel-body">
              ...
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-6 panels" id="UNIQUE_ID">
        ...
      </div>
    </div>

All elements with the mark UNIQUE_ID must be given unique ids.

The class .panel-handle can be added to any element and is optional.
That element will be used as a handle for the drag and drop functionality.
Feel free to skip it if you don't wand drag and drop reordering.

The class .panel-colorize can be added to any element and is optional.
The element will be the receiver of the color chooser functionality.
Feel free to skip it if you are not using the color chooser.

All the elements with the .panel-action class are optional, only use the actions
that you want to make available for the panel.

### HTML5 API

The DATA_ATTRIBUTES can be used for the initial state of the panel, and can be the following:

    data-url="URL"         | loads the body of the panel with ajax from the URL adress
    data-close="true"      | has the panel closed by defaul
    data-collapse="true"   | has the panel collapsed by defaul
    data-fullscreen="true" | has the panel fullscreen by defaul
    data-title="TITLE"     | changes the default panel title with TITLE
    data-color="#HEXHEX"   | has the .panel-colorize default background color to #HEXHEX

### JS API

    $('[rel=panels]').panels()
