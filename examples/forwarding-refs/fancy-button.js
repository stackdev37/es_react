class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}

// En lugar de exportar FancyButton, exportamos LogProps.
// Esto renderizar√° un FancyButton igualmente.
// highlight-next-line
export default logProps(FancyButton);
