/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace JSX {
  interface IntrinsicElements {
    'tatami-canvas': {
      'paper-width': string;
      'paper-height': string;
      'paper-color': string;
    };
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
      tatami?: string;
    };
  }
}

type ColorInput = string | { r: number, g: number, b: number } | [number, number, number];
type ProjectData = { blob: Blob; base64: string };

interface Window {
  tatami: {
    api: {
      // General
      initCommands(): void;
      sendCommand(command: string): void;

      // Canvas
      setCanvasSize(width: number, height: number): void;
      setViewport(width: number, height: number): void;
      resizeCanvas(width: number, height: number): void;
      centerCanvas(): void;
      resetCanvasTransform(): void;
      undo(): void;
      redo(): void;
      setShiftPressed(pressed: boolean): void;
      getProjectData(): Promise<ProjectData>;
      getUncompressedProjectData(): Promise<ProjectData>;
      setAutoRotateSpeed(speed: number): void;
      flipCanvasX(): void;
      flipCanvasY(): void;
      zoom(zoom: number, x: number, y: number): void;
      getCanvasTransform(): any;
      getInfoAt(coords: { x: number, y: number }): any;
      getColorAt(coords: { x: number, y: number }): { color: [number, number, number, number] };
      saveCurrentImage(format?: 'jpg' | 'png'): Promise<Blob>;
      saveCurrentThumbnail(): Promise<Blob>;

      // Brush
      getBrushPreview(options: { brushSize: number, imageWidth: number, imageHeight: number }): Promise<ProjectData>;
      getBrushPackage(): Promise<ProjectData>;
      setTouchAttributes(force: number, altitudeAngle: number, azimuthAngle: number): void;
      pointerStart(mode: number, x: number, y: number): void;
      pointerMove(mode: number, x: number, y: number): void;
      pointerEnd(mode: number, x: number, y: number): void;
      setBrushTexture(attribute: 'sampler2d' | 'staticmul', storagePath: string): void;
      getBrushInfo(): any;
      setBrushInfo(info: any): void;
      updateBrush(options: { section: string, prop: string, value: any }): void;
      setColor(color: ColorInput): void;
      getCurrentColor(): string;
      getFullBrushInfo(): any;
      setSymmetry(points: number): void;
      setGravity(enabled: boolean, friction: number, aim: number, ropeLength: number): void;
      setPerspective(points: number): void;
      setStabilizer(enabled: boolean, strength: number): void;
      setBrushSize(size: number): void;
      setBrushPressure(value: number): void;
      setBrushSpacing(value: number): void;
      setBrushOpacity(value: number): void;
      setBrushDynamics(value: number): void;
      setBrushDynamicsScale(value: number): void;
      setBrushFadeIn(value: number): void;
      setBrushFadeOut(value: number): void;
      setBrushInkFade(value: number): void;
      setBrushRotate(value: number): void;
      setBrushAngleRandom(value: number): void;
      setBrushColorRandom(value: number): void;
      setBrushScaleRandom(value: number): void;
      setBrushJitter(value: number): void;

      // Color Adjustments
      startAdjusting(): void;
      endAdjusting(): void;
      getAdjustments(): any;
      setAdjustments(adjustments: any): void;

      // Clipboard
      cut(id: number): void;
      copy(): void;
      copyLayer(id: number): void;
      paste(): void;
      getClipboardImage(): Promise<ProjectData>;

      // Layer
      getLayers(): any[];
      setLayers(layers: any[]): void;
      selectLayer(id: number): void;
      addLayer(): void;
      deleteLayer(id?: number): void;
      getLayerModes(): string[];
      getLayerImage(id: number, fullSize: boolean): Promise<ProjectData>;
      duplicateLayer(): void;
      clearAll(): void;
      handleMaskMode(mode: number): void;
      resetLayerTransform(): void;
      burnLayerTransform(): void;
      layerMergeDown(): void;
      layerFlipX(): void;
      layerFlipY(): void;
      layerRotate(degrees: number): void;
      layerInverseColors(): void;
      layerAutoCrop(): void;
      setGuideVisibility(options: { opacity: number, maskOpacity: number }): void;
      removeGuide(): void;
      layerScanColors(): any;
      layerCenter(): void;
      layerFitSize(): void;
      layerCoverSize(): void;
      toggleLayerLock(id: number): void;
      setLayerVisibility(id: number, state: boolean): void;
      flattenImage(): void;

      // Frame
      addFrame(): void;
      deleteFrame(): void;
      getFrames(): any[];
      gotoFrame(index: number): void;
      showGhostFrames(): void;
      hideGhostFrames(): void;
      gotoPreviousFrame(): void;
      gotoNextFrame(options?: { loop: boolean }): void;
      duplicateNextFrame(options?: { loop: boolean }): void;
      playFrames(fps?: number): void;

      // Selection
      selectAll(): void;
      clearSelection(): void;
      eraseSelection(): void;
      selectionFromAlpha(): void;
      selectionFromColor(color: string, threshold: number, softness: number): void;
      selectionInvert(): void;
      selectionExists(): boolean;
      getSelectionArea(): any;
      setSelectionArea(top: number, right: number, bottom: number, left: number): void;
      getSelection(format: 'jpg' | 'png'): Promise<ProjectData>;
      getSelectionMask(id: number): Promise<string>;

      // Vector
      getForms(): any[] | false;
      selectForm(id: number): void;
      unselectForm(): void;
      deleteSelectedForm(): void;
      copySelectedForm(): void;
      cutSelectedForm(): void;
      pasteNextClick(): void;
      pasteAtCoordinate(x: number, y: number): void;

      // Storage
      listStorage(): any;
      getFromStorage(pathToFile: string, type: string): Promise<Blob>;
      removeFromStorage(pathToFile: string): void;
      releaseStores(): void;
      putTatamiVars(filename: string, payload: string): void;
      getTatamiVars(filename: string): string;
    };
    utils: {
      // File Operations
      askForFile(options?: { fromCamera?: boolean; accept?: string }, target?: string): Promise<File[]>;
      blobToBase64(blob: Blob): Promise<string>;
      urlToFile(url: string): Promise<File>;
      srcToArrayBuffer(url: string): Promise<ArrayBuffer>;
      loadAsset(options: {
        src?: string;
        file?: File;
        target?: string;
        options?: { showSpinner?: boolean };
      }): Promise<void>;

      // Spinner
      createSpinner(): void;
      destroySpinner(): void;

      // SVG
      openSvg(url: string): Promise<void>;
      setSvgSize(options: { base64: string; width: string; height: string }): string;

      // Image Operations
      createNewEmpty(options: { width: number; height: number; bg: string }): Promise<string>;
      getImageSize(url: string): Promise<{ width: number; height: number }>;
      limitImageSize(options: { url: string; maxSize: number }): Promise<{ base64: string; width: number; height: number }>;
      preloadImage(url: string): Promise<void>;
      webpToPng(url: string): Promise<string>;

      // Color Conversions
      colorToHex(color: { r: number; g: number; b: number }): string;
      rgbToHex(color: { r: number; g: number; b: number }): string;
      hexToRgb(hex: string): { r: number; g: number; b: number };
      hexToRgbArray(hex: string): [number, number, number, number];
      hslToRgb(h: number, s: number, l: number): [number, number, number];
      hslToRgbaObj(h: number, s: number, l: number): { r: number; g: number; b: number; a: number };
      rgbToHsl(r: number, g: number, b: number): [number, number, number];
      isHex(str: string): boolean;

      // Clipboard
      copyTextToClipboard(text: string): Promise<void>;
      copyBlobToClipboard(blob: Blob): Promise<void>;
      getClipboardText(): Promise<string>;
      createPasteListener(): void;

      // Sharing
      nativeShare(options: { blob: Blob; filename: string; type: string }): Promise<void>;

      // Brush
      loadBrushPackage(options: { url?: string; blob?: Blob; base64?: string }): Promise<void>;
      loadBrushTip(options: { url?: string; blob?: Blob; base64?: string }): Promise<void>;
    };
  };
} 