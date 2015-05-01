export default
class CannonBodyConfig extends SupCore.data.base.ComponentConfig {
  static schema = {
    mass: {type: "number", min: 0, mutable: true},
    fixedRotation: {type: "boolean", mutable: true},
    offsetX: {type: "number", mutable: true},
    offsetY: {type: "number", mutable: true},
    offsetZ: {type: "number", mutable: true},
    shape: {type: "enum", items: ["box", "sphere", "cylinder"], mutable: true},
    halfDepth: {type: "number", min: 0, mutable: true},
    halfWidth: {type: "number", min: 0, mutable: true},
    halfHeight: {type: "number", min: 0, mutable: true},
    radius: {type: "number", min: 0, mutable: true},
    height: {type: "number", min: 0, mutable: true}
  };

  static create() {
    return {
      mass: 0,
      fixedRotation: false,
      offsetX: 0,
      offsetY: 0,
      offsetZ: 0,
      shape: "box",
      halfWidth: 0.5,
      halfHeight: 0.5,
      halfDepth: 0.5,
      radius: 1,
      height: 1
    };

  }

  constructor(pub:any) {
    super(pub, CannonBodyConfig.schema);
    this.pub.shape = this.pub.shape != null ? this.pub.shape : "box";
    this.pub.radius = this.pub.radius != null ? this.pub.radius : 1;
    this.pub.height = this.pub.height != null ? this.pub.height : 1;
  }


}

