// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: 3egWRKWeo74
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "../library_plasmic_color_type/plasmic_library_plasmic_color_type.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicButton.css"; // plasmic-import: 3egWRKWeo74/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: njqCx3VuHS8/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 6y5MVH3d4jX/icon

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export const PlasmicButton__ArgProps = new Array(
  "children",
  "startIcon",
  "endIcon",
  "link"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__button",
        "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
        "plasmic_default_styles",
        "plasmic_mixins",
        "plasmic_tokens",
        "plasmic_tokens",
        "Button__root___6PeBs",
        {
          Button__root___focusVisibleWithin___6PeBsqQkt:
            triggers.focusVisibleWithin_root,
          Button__rootcolor_blue___6PeBsvPglt: hasVariant(
            variants,
            "color",
            "blue"
          ),

          Button__rootcolor_clear___6PeBsFxL6N: hasVariant(
            variants,
            "color",
            "clear"
          ),

          Button__rootcolor_green___6PeBsff5U9: hasVariant(
            variants,
            "color",
            "green"
          ),

          Button__rootcolor_link___6PeBs5CgNa: hasVariant(
            variants,
            "color",
            "link"
          ),

          Button__rootcolor_link_size_minimal___6PeBs5CgNaKub7C:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal"),
          Button__rootcolor_red___6PeBsr75H4: hasVariant(
            variants,
            "color",
            "red"
          ),

          Button__rootcolor_sand___6PeBsyZPvI: hasVariant(
            variants,
            "color",
            "sand"
          ),

          Button__rootcolor_softBlue___6PeBsiLVl: hasVariant(
            variants,
            "color",
            "softBlue"
          ),

          Button__rootcolor_softGreen___6PeBsPmOpe: hasVariant(
            variants,
            "color",
            "softGreen"
          ),

          Button__rootcolor_softRed___6PeBst8Ux: hasVariant(
            variants,
            "color",
            "softRed"
          ),

          Button__rootcolor_softSand___6PeBsvyCgk: hasVariant(
            variants,
            "color",
            "softSand"
          ),

          Button__rootcolor_softYellow___6PeBsY5Cpm: hasVariant(
            variants,
            "color",
            "softYellow"
          ),

          Button__rootcolor_white___6PeBsViyw4: hasVariant(
            variants,
            "color",
            "white"
          ),

          Button__rootcolor_yellow___6PeBs0Ow1S: hasVariant(
            variants,
            "color",
            "yellow"
          ),

          Button__rootisDisabled___6PeBspWrzr: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          Button__rootshape_round___6PeBspO2TY: hasVariant(
            variants,
            "shape",
            "round"
          ),

          Button__rootshape_rounded___6PeBsto0Z: hasVariant(
            variants,
            "shape",
            "rounded"
          ),

          Button__rootshape_sharp___6PeBswSdEp: hasVariant(
            variants,
            "shape",
            "sharp"
          ),

          Button__rootshowEndIcon___6PeBsD7Zi6: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          Button__rootshowEndIcon_shape_rounded___6PeBsD7Zi6To0Z:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          Button__rootshowEndIcon_size_compact___6PeBsD7Zi6Wjm9A:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          Button__rootshowEndIcon_size_compact_showStartIcon___6PeBsD7Zi6Wjm9AXxzIz:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          Button__rootshowStartIcon___6PeBsXxzIz: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),

          Button__rootshowStartIcon_shape_rounded___6PeBsXxzIzTo0Z:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          Button__rootsize_compact___6PeBsWjm9A: hasVariant(
            variants,
            "size",
            "compact"
          ),

          Button__rootsize_compact_shape_round___6PeBsWjm9APO2TY:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          Button__rootsize_compact_shape_rounded___6PeBsWjm9ATo0Z:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          Button__rootsize_compact_showStartIcon___6PeBsWjm9AXxzIz:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          Button__rootsize_minimal___6PeBsKub7C: hasVariant(
            variants,
            "size",
            "minimal"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "Button__startIconContainer__ceqat",
            {
              Button__startIconContainercolor_blue__ceqatvPglt: hasVariant(
                variants,
                "color",
                "blue"
              ),

              Button__startIconContainershowStartIcon__ceqatXxzIz: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              ),

              Button__startIconContainershowStartIcon_shape_rounded__ceqatXxzIzTo0Z:
                hasVariant(variants, "shape", "rounded") &&
                hasVariant(variants, "showStartIcon", "showStartIcon")
            }
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__svg",
                  "Button__svg__ac7Jh"
                )}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames("Button__slotTargetStartIcon___2GStF", {
              Button__slotTargetStartIconcolor_blue___2GStFvPglt: hasVariant(
                variants,
                "color",
                "blue"
              ),

              Button__slotTargetStartIconcolor_clear___2GStFFxL6N: hasVariant(
                variants,
                "color",
                "clear"
              ),

              Button__slotTargetStartIconcolor_link___2GStF5CgNa: hasVariant(
                variants,
                "color",
                "link"
              ),

              Button__slotTargetStartIconcolor_softBlue___2GStFiLVl: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              Button__slotTargetStartIconcolor_softGreen___2GStFpmOpe:
                hasVariant(variants, "color", "softGreen"),
              Button__slotTargetStartIconcolor_softRed___2GStFt8Ux: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              Button__slotTargetStartIconcolor_softSand___2GStFvyCgk:
                hasVariant(variants, "color", "softSand"),
              Button__slotTargetStartIconcolor_softYellow___2GStFy5Cpm:
                hasVariant(variants, "color", "softYellow"),
              Button__slotTargetStartIconcolor_white___2GStFViyw4: hasVariant(
                variants,
                "color",
                "white"
              ),

              Button__slotTargetStartIconcolor_yellow___2GStF0Ow1S: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              Button__slotTargetStartIconshowStartIcon___2GStFxxzIz: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__div",
          "Button__contentContainer__sWjg",
          {
            Button__contentContainer___focusVisibleWithin__sWjgQQkt:
              triggers.focusVisibleWithin_root,
            Button__contentContainerisDisabled__sWjgPWrzr: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            Button__contentContainershape_rounded__sWjgTo0Z: hasVariant(
              variants,
              "shape",
              "rounded"
            ),

            Button__contentContainershowEndIcon__sWjgD7Zi6: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          }
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames("Button__slotTargetChildren__fcHzF", {
            Button__slotTargetChildren___focusVisibleWithin__fcHzFqQkt:
              triggers.focusVisibleWithin_root,
            Button__slotTargetChildrencolor_blue__fcHzFvPglt: hasVariant(
              variants,
              "color",
              "blue"
            ),

            Button__slotTargetChildrencolor_clear__fcHzFFxL6N: hasVariant(
              variants,
              "color",
              "clear"
            ),

            Button__slotTargetChildrencolor_green__fcHzFff5U9: hasVariant(
              variants,
              "color",
              "green"
            ),

            Button__slotTargetChildrencolor_link__fcHzF5CgNa: hasVariant(
              variants,
              "color",
              "link"
            ),

            Button__slotTargetChildrencolor_link_size_minimal__fcHzF5CgNaKub7C:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal"),
            Button__slotTargetChildrencolor_red__fcHzFr75H4: hasVariant(
              variants,
              "color",
              "red"
            ),

            Button__slotTargetChildrencolor_sand__fcHzFyZPvI: hasVariant(
              variants,
              "color",
              "sand"
            ),

            Button__slotTargetChildrencolor_softBlue__fcHzFiLVl: hasVariant(
              variants,
              "color",
              "softBlue"
            ),

            Button__slotTargetChildrencolor_softGreen__fcHzFpmOpe: hasVariant(
              variants,
              "color",
              "softGreen"
            ),

            Button__slotTargetChildrencolor_softRed__fcHzFt8Ux: hasVariant(
              variants,
              "color",
              "softRed"
            ),

            Button__slotTargetChildrencolor_softSand__fcHzFvyCgk: hasVariant(
              variants,
              "color",
              "softSand"
            ),

            Button__slotTargetChildrencolor_softYellow__fcHzFy5Cpm: hasVariant(
              variants,
              "color",
              "softYellow"
            ),

            Button__slotTargetChildrencolor_white__fcHzFViyw4: hasVariant(
              variants,
              "color",
              "white"
            ),

            Button__slotTargetChildrencolor_yellow__fcHzF0Ow1S: hasVariant(
              variants,
              "color",
              "yellow"
            ),

            Button__slotTargetChildrenisDisabled__fcHzFpWrzr: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            Button__slotTargetChildrenshape_rounded__fcHzFto0Z: hasVariant(
              variants,
              "shape",
              "rounded"
            ),

            Button__slotTargetChildrenshowEndIcon__fcHzFd7Zi6: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),

            Button__slotTargetChildrenshowStartIcon__fcHzFxxzIz: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            Button__slotTargetChildrensize_minimal__fcHzFkub7C: hasVariant(
              variants,
              "size",
              "minimal"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "Button__endIconContainer__cpmtr",
            {
              Button__endIconContainercolor_white__cpmtrViyw4: hasVariant(
                variants,
                "color",
                "white"
              ),

              Button__endIconContainercolor_yellow__cpmtr0Ow1S: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              Button__endIconContainershowEndIcon__cpmtrD7Zi6: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            }
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__svg",
                  "Button__svg___6KGtr"
                )}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames("Button__slotTargetEndIcon__o1Ubh", {
              Button__slotTargetEndIconcolor_clear__o1UbhFxL6N: hasVariant(
                variants,
                "color",
                "clear"
              ),

              Button__slotTargetEndIconcolor_link__o1Ubh5CgNa: hasVariant(
                variants,
                "color",
                "link"
              ),

              Button__slotTargetEndIconcolor_softBlue__o1UbHiLVl: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              Button__slotTargetEndIconcolor_softGreen__o1UbhpmOpe: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              Button__slotTargetEndIconcolor_softRed__o1UbHt8Ux: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              Button__slotTargetEndIconcolor_softSand__o1UbHvyCgk: hasVariant(
                variants,
                "color",
                "softSand"
              ),

              Button__slotTargetEndIconcolor_softYellow__o1Ubhy5Cpm: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              Button__slotTargetEndIconcolor_white__o1UbhViyw4: hasVariant(
                variants,
                "color",
                "white"
              ),

              Button__slotTargetEndIconcolor_yellow__o1Ubh0Ow1S: hasVariant(
                variants,
                "color",
                "yellow"
              ),

              Button__slotTargetEndIconshowEndIcon__o1Ubhd7Zi6: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },

      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
