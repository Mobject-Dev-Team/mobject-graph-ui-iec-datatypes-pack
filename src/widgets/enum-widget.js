import {
  DisplayWidget,
  ControlWidget,
  ComboboxComponent,
  SingleLineTextDisplayComponent,
  ColorGenerator,
} from "mobject-graph-ui";

export class EnumDisplayWidget extends DisplayWidget {
  constructor(name, parent, options) {
    super(name, parent, options);

    const defaultValue = options?.content?.defaultValue || "";
    const type = options?.content?.datatype?.typeName || "";
    const colorPallet = new ColorGenerator(type);

    this.textDisplayComponent = new SingleLineTextDisplayComponent(
      name,
      defaultValue,
      colorPallet
    );

    this.on("valueChanged", (newValue, oldValue) => {
      this.textDisplayComponent.text = newValue;
    });
  }

  computeSize() {
    return this.textDisplayComponent.computeSize();
  }

  draw(ctx, node, widget_width, y, H) {
    this.textDisplayComponent.draw(ctx, node, widget_width, y, H);
  }
}

export class EnumControlWidget extends ControlWidget {
  constructor(name, parent, options) {
    super(name, parent, options);

    const defaultValue = options?.parameter?.defaultValue || "";
    const enumerations = options?.parameter?.datatype?.enumerations || [];
    const type = options?.parameter?.datatype?.typeName || "";
    const colorPallet = new ColorGenerator(type);

    this.comboboxComponent = new ComboboxComponent(
      name,
      defaultValue,
      enumerations,
      colorPallet
    );

    this.on("valueChanged", (newValue, oldValue) => {
      this.comboboxComponent.selection = newValue;
    });

    this.comboboxComponent.on("onChange", (selection) => {
      this.value = selection;
    });
  }

  computeSize(nodeX, nodeY) {
    return this.comboboxComponent.computeSize(nodeX, nodeY);
  }

  mouse(event, pos, node) {
    this.comboboxComponent.onMouse(event, pos);
  }

  draw(ctx, node, widget_width, y, H) {
    this.comboboxComponent.draw(ctx, node, widget_width, y, H);
  }
}
