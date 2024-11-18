import {
  DisplayWidget,
  ControlWidget,
  SingleLineTextDisplayComponent,
  SingleLineTextInputComponent,
  ColorGenerator,
} from "mobject-graph-ui";

export class StringDisplayWidget extends DisplayWidget {
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

export class StringControlWidget extends ControlWidget {
  constructor(name, parent, options) {
    super(name, parent, options);

    const defaultValue = options?.parameter?.defaultValue || "";
    const type = options?.parameter?.datatype?.typeName || "";
    const colorPallet = new ColorGenerator(type);

    this.textInputComponent = new SingleLineTextInputComponent(
      name,
      defaultValue,
      colorPallet
    );

    this.on("valueChanged", (newValue, oldValue) => {
      this.textInputComponent.text = newValue;
    });

    this.textInputComponent.on("onChange", (text) => {
      this.value = text;
    });
  }

  computeSize() {
    return this.textInputComponent.computeSize();
  }

  mouse(event, pos, node) {
    this.textInputComponent.onMouse(event, pos);
  }

  draw(ctx, node, widget_width, y, H) {
    this.textInputComponent.draw(ctx, node, widget_width, y, H);
  }
}
