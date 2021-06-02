import merge from "lodash/merge"
import styled from "styled-components"

const bg = "rgb(1, 22, 39)"

export const PlyStyled = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  @media (min-width: 640px) {
    margin: 0px -32px;
  }
  .playground {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #111827;
    .go1107490688 {
      background: white;
    }
    .go1048851327 {
      font-size: 16px;
    }
  }
  [role=tablist] {
    padding: 0 8px;
  }
  [data-reach-tab] {
    color: #6B7280;
    font-size: 14px;
    text-transform: uppercase;
    outline: none;
  }
  [data-reach-tab][data-selected] {
    color: white;
  }
`

const lightModeColors = {
  container: {
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  error: {
    background: "#e74c3c",
    color: "#ffffff",
  },
  console: {
    background: "rgba(0, 0, 0, 1)",
  },
  divider: {
    background: "#202020",
  },
  editor: {
    backgroundColor: `#000000`,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      background: "transparent",
      color: `#000000`,
      borderBottom: `0.1em solid rgba(0, 0, 0, 0.1)`,
    },
  },
};

const darkModeColors = {
  container: {
    borderColor: "none",
    borderRadius: "10px",
  },
  error: {
    background: bg,
    color: "#ffffff",
  },
  console: {
    background: bg,
  },
  divider: {
    background: bg,
  },
  editor: {
    backgroundColor: bg,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      background: bg,
      panelBackground: bg,
      color: `#ffffff`,
      fontSize: 16
    },
    selectedTab: {
      borderBottom: 0,
    },
  },
};

export const theme = {
  container: {
    borderColor: "",
    minHeight: "20em",
    minWidth: "15em",
  },
  error: {
    background: "",
    color: "",
  },
  console: {
    background: "rgba(0, 0, 0, 1)",
  },
  divider: {
    width: 2,
    background: "",
  },
  editor: {
    fontFamily: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    backgroundColor: ``,
    color: ``,
  },
  tabs: {
    tabHeader: {
      borderBottom: "",
      panelBackground: "",
      background: "",
      color: "",
    },
    tabPanel: {
      phoneHeight: "10em",
    },
    selectedTab: {
      background: "",
      borderBottom: "0.2em solid rgb(0, 0, 0)",
    },
  },
};

export type ColorMode = "light" | "dark";

/**
 * Get corresponding theme.
 * @param mode color theme type
 */
export default function getTheme(mode: ColorMode = "dark") {
  const colorTheme = mode === "light" ? lightModeColors : darkModeColors;
  return merge(theme, colorTheme);
}